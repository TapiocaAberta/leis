(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('PoliticanDetailsCtrl', function($scope, $http, $stateParams, URI) {

          if($stateParams.idItem) {

            $scope.options = {
              chart: {
                  type: 'pieChart',
                  height: 500,
                  x: function(d){return d.key;},
                  y: function(d){return d.y;},
                  showLabels: true,
                  duration: 500,
                  labelThreshold: 0.01,
                  labelSunbeamLayout: true,
                  legend: {
                      margin: {
                          top: 5,
                          right: 35,
                          bottom: 5,
                          left: 0
                      }
                  }
              }
            };

            var TOTAL_PG = 6;
            $scope.PG = 0;
            $scope.lawTypeData = [];
            $scope.lawSituationData = [];
            $scope.lawClassData = [];

              $http.get(URI + 'autores/' + $stateParams.idItem)
              .success(function(data) {
                  $scope.politicians = data;
              }).error(function(error) {
                  console.log(error);
              });

              $http.get(URI + 'autores/' + $stateParams.idItem + '/grafico').success(function(data) {

                buildDataChart(data.leisChart.tipo, $scope.lawTypeData);
                buildDataChart(data.leisChart.situacao, $scope.lawSituationData);
                buildDataChart(data.leisChart.classe, $scope.lawClassData);

              }).error(function(error) {
                  console.log(error);
              });

              function buildDataChart(datas, dataChart) {

                angular.forEach(datas, function(value) {
                  dataChart.push({key: value.label, y: value.valor});
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
