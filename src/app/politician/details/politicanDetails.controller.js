(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('PoliticanDetailsCtrl', function($scope, $http, $stateParams, URI, TOTAL_ITENS) {

          if($stateParams.idItem) {

            $scope.totalPorPg = 10;
            $scope.filtro = {situacao:{}, classe:{}, tipo:{}, ano:null};

            getLawsAlderman()
            preecheForm();


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

            $http.get(URI + 'autores/' + $stateParams.idItem)
              .success(function(data) {
                  $scope.politicians = data;
              }).error(function(error) {
                  console.log(error);
              });
              
             $http.get(URI + 'presenca/vereador/' + $stateParams.idItem)
              .success(function(data) {
                  $scope.presencas = data;
                  $scope.sessoesComFalta = [];
                  $scope.totalSessoes = 0;
                  for(var i in data) {
                      $scope.totalSessoes++;
                      if(!data[i]) {
                        $scope.sessoesComFalta.push(i);
                      }
                  }
              }).error(function(error) {
                  console.log(error);
              });
            function getLawsAlderman(pgAtual) {

                pgAtual = (typeof pgAtual === 'undefined' || !pgAtual) ? 1 : pgAtual;

                var URL = URI + 'leis/filtra?total='+ $scope.totalPorPg + '&pg=' + (pgAtual - 1) + '&idAutor=' + $stateParams.idItem;

                URL = (typeof $scope.filtro.situacao.id === 'undefined' || !$scope.filtro.situacao.id) ? URL : URL + '&idSituacao=' + $scope.filtro.situacao.id;
                URL = (typeof $scope.filtro.classe.id === 'undefined' || !$scope.filtro.classe.id) ?  URL : URL + '&idClasse=' + $scope.filtro.classe.id;
                URL = (typeof $scope.filtro.tipo.id === 'undefined' || !$scope.filtro.tipo.id) ? URL :  URL + '&idTipo=' + $scope.filtro.tipo.id;
                URL = (typeof $scope.filtro.ano === 'undefined' || !$scope.filtro.ano) ?  URL : URL + '&ano=' + $scope.filtro.ano.ano;

                $http.get(URL)
                  .success(function(data, status, headers) {
                      $scope.laws = data;
                      $scope.totalItens = headers(TOTAL_ITENS);
                }).error(function(error, status, headers) {
                      console.log(error);
                });
              };

              $scope.filtrar = function() {
                getLawsAlderman();
              };

              $scope.limpar = function() {
                $scope.filtro = {situacao:{}, classe:{}, tipo:{}, ano:null};
                getLawsAlderman();
              };

              $scope.pageChanged = function(pgAtual) {
                getLawsAlderman(pgAtual);
              };

            $http.get(URI + 'autores/' + $stateParams.idItem + '/grafico').success(function(data) {

                buildDataChart(data.leisChart.tipo, $scope.tipoChart, "Tipo");
                buildDataChart(data.leisChart.situacao, $scope.situacaoChart, "Situação");
                buildDataChart(data.leisChart.classe, $scope.classificacao, "Classificação");

              }).error(function(error) {
                  console.log(error);
              });

              function preecheForm() {

                $http.get(URI + 'leis/anos?idAutor=' +  $stateParams.idItem)
                        .success(function(data) {
                            $scope.anos = data;
                        })
                        .error(function(error) {
                            console.log(error);
                });

                $http.get(URI + 'tipo')
                        .success(function(data) {
                            $scope.tipos = data;
                        })
                        .error(function(error) {
                            console.log(error);
                });

                $http.get(URI + 'situacao-simplificada')
                        .success(function(data) {
                            $scope.situacoes = data;
                        })
                        .error(function(error) {
                            console.log(error);
                });

                $http.get(URI + 'classe')
                        .success(function(data) {
                            $scope.classes = data;
                        })
                        .error(function(error) {
                            console.log(error);
                });

              }

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

          }  else {
            console.log("tratar");
          };

        });
})();
