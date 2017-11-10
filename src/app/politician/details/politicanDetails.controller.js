(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('PoliticanDetailsCtrl', function($scope, $http, $stateParams, URI) {

            $http.get(URI + 'autores/' + $stateParams.idItem).success(function(data) {
                $scope.politicians = data;
            });

            var TOTAL_PG = 6;
            $scope.PG = 0;

            $http.get(URI + 'autores/' + $stateParams.idItem + '/leis?total='+TOTAL_PG+'&pg='+$scope.PG).success(function(data) {
                $scope.laws = data;
            });

            $scope.next = function() {
              $scope.PG = $scope.PG + 1;
              $http.get(URI + 'autores/' + $stateParams.idItem + '/leis?total='+TOTAL_PG+'&pg='+$scope.PG).success(function(data) {
                  $scope.laws = data;
              });
            };

            $scope.previous = function() {
              if($scope.PG !== 0) {
                $scope.PG = $scope.PG - 1;
                $http.get(URI + 'autores/' + $stateParams.idItem + '/leis?total='+TOTAL_PG+'&pg='+$scope.PG).success(function(data) {
                    $scope.laws = data;
                });
              }
            };

        });
})();
