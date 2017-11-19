(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('RankingCtrl', function($scope, $http, $stateParams, URI) {

          $scope.tipoChart = {
              nomeChart: 'tipo_chart',
              titulo: 'Por tipo de leis',
              subtitle: 'Mostra a quantidade de leis agrupados por tipo'
          };

          $scope.situacaoChart = {
              nomeChart: 'situacao_chart',
              titulo: 'Por situação da leis',
              subtitle: 'Mostra a quantidade das leis agrupados por situação'
          };

          $scope.classificacao = {
              nomeChart: 'classificacao_tipo',
              titulo: 'Por classificação das leis',
              subtitle: 'Mostra a quantidade das leis agrupados por situação'
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

            buildDataChart(data.tipo, $scope.tipoChart);
            buildDataChart(data.situacao, $scope.situacaoChart);
            buildDataChart(data.classe, $scope.classificacao);

          }).error(function(error) {
              console.log(error);
          });

          function buildDataChart(datas, chartProp) {

            var categories = [];
            var series = [];

            angular.forEach(datas, function(value) {
              categories.push(value.label);
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
                xAxis: {categories: categories},
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
