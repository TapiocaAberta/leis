(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('RankingCtrl', function($scope, $http, $stateParams, URI) {

          $scope.tipoChart = {
              nomeChart: 'tipo_chart',
              titulo: 'Tipo x Quantidade',
              subtitle: 'Mostra a quantidade de documentos agrupados por tipo'
          };

          $scope.situacaoChart = {
              nomeChart: 'situacao_chart',
              titulo: 'Situação x Quantidade',
              subtitle: 'Mostra a quantidade de documentos agrupados por situação'
          };

          $scope.classificacao = {
              nomeChart: 'classificacao_tipo',
              titulo: 'Classificação x Quantidade',
              subtitle: 'Mostra a quantidade de documentos agrupados por situação'
          };

          Highcharts.setOptions({
              lang: {
          		      decimalPoint: ',',
          		      thousandsSep: '.',
          		      numericSymbols:  [ " mil" , " milhões" , " bilhões" , "T" , "P" , "E"]
          		}
          });

          $http.get(URI + 'leis/grafico').success(function(data) {

            $scope.dataChart = data;

            buildDataChart(data.tipo, $scope.tipoChart, "Tipo");
            buildDataChart(data.situacao, $scope.situacaoChart, "Situação");
            buildDataChart(data.classe, $scope.classificacao, "Classificação");

          }).error(function(error) {
              console.log(error);
          });

          function buildDataChart(datas, chartProp, categoria) {

            var series = [];

            angular.forEach(datas, function(value) {
              series.push({data: [value.valor], name: value.label});
            });

            Highcharts.chart(chartProp.nomeChart, {
                chart: {
                    type: 'column'
                },
                title: {
                    text: chartProp.titulo
                },
                subtitle: {
                    text: chartProp.subtitle
                },
                xAxis: {categories: [categoria]},
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Quantidade'
                    }
                },
                series: series
              });
          };
    });

})();
