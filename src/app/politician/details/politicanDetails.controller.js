(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('PoliticanDetailsCtrl', function($scope, $http, $stateParams, URI) {

          if($stateParams.idItem) {

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

            var TOTAL_PG = 6;
            $scope.PG = 0;

              $http.get(URI + 'autores/' + $stateParams.idItem)
              .success(function(data) {
                  $scope.politicians = data;
              }).error(function(error) {
                  console.log(error);
              });

              $http.get(URI + 'autores/' + $stateParams.idItem + '/grafico').success(function(data) {

                buildDataChart(data.leisChart.tipo, $scope.tipoChart);
                buildDataChart(data.leisChart.situacao, $scope.situacaoChart);
                buildDataChart(data.leisChart.classe, $scope.classificacao);

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

              $http.get(URI + 'autores/' + $stateParams.idItem + '/leis?total='+TOTAL_PG+'&pg='+$scope.PG).success(function(data) {
                  $scope.laws = data;
              }).error(function(error) {
                  console.log(error);
              });

              $scope.next = function() {
                $scope.PG = $scope.PG + 1;
                $http.get(URI + 'autores/' + $stateParams.idItem + '/leis?total='+TOTAL_PG+'&pg='+$scope.PG).success(function(data) {
                    $scope.laws = data;
                }).error(function(error) {
                    console.log(error);
                });
              };

              $scope.previous = function() {
                if($scope.PG !== 0) {
                  $scope.PG = $scope.PG - 1;
                  $http.get(URI + 'autores/' + $stateParams.idItem + '/leis?total='+TOTAL_PG+'&pg='+$scope.PG).success(function(data) {
                      $scope.laws = data;
                  }).error(function(error) {
                      console.log(error);
                  });
                }
              };
          };

        });
})();
