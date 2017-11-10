(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawsCtrl', function($scope, $http, $stateParams, URI) {

            $scope.direction = 'desc';
            var TOTAL_PG = 6;
            $scope.PG = 0;

            $http.get(URI + 'leis?total=' + TOTAL_PG + '&pg=' + $scope.PG)
                    .success(function(data) {
                        $scope.laws = data;
                        $scope.lawOrder = 'id';
                    })
                    .error(function(error) {
                        console.log(error);
            });


            $scope.next = function() {
              $scope.PG+=1;
              $http.get(URI + 'leis?total=' + TOTAL_PG + '&pg=' + $scope.PG)
                      .success(function(data) {
                          $scope.laws = data;
                          $scope.lawOrder = 'id';
                      })
                      .error(function(error) {
                          console.log(error);
              });
            };

            $scope.previous = function() {
              if($scope.PG !==0) {
                $scope.PG -=1;
                $http.get(URI + 'leis?total=' + TOTAL_PG + '&pg=' + $scope.PG)
                        .success(function(data) {
                            $scope.laws = data;
                            $scope.lawOrder = 'id';
                        })
                        .error(function(error) {
                            console.log(error);
                });
              }
            };

        });
})();
