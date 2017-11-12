(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('RankingCtrl', function($scope, $http, $stateParams, URI) {

          $scope.lawTypeData = [];
          $scope.lawSituationData = [];
          $scope.lawClassData = [];

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
                legend: { margin: { top: 5, right: 35, bottom: 5, left: 0 }
                }
             }
          };

          $http.get(URI + 'leis/grafico').success(function(data) {

            $scope.dataChart = data;
            
            buildDataChart(data.tipo, $scope.lawTypeData);
            buildDataChart(data.situacao, $scope.lawSituationData);
            buildDataChart(data.classe, $scope.lawClassData);

          }).error(function(error) {
              console.log(error);
          });

          function buildDataChart(datas, dataChart) {
            angular.forEach(datas, function(value) {
              dataChart.push({key: value.label, y: value.valor});
            });
          };



    });

})();
