(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('PoliticianCtrl', function($scope, $http, URI) {

          var TOTAL_PG = 9;
          var PG = 0;

            $http.get(URI + 'autores?total=' + TOTAL_PG + '&pg=' + PG).success(function(data) {

                $scope.politicians = data;
                $scope.politicianOrder = 'nome';

            }).error(function(error) {
                console.log(error);
            });

            $scope.next = function() {

              PG+=1;

              $http.get(URI + 'autores?total=' + TOTAL_PG + '&pg=' + PG).success(function(data) {
                    $scope.politicians = data;
                    $scope.politicianOrder = 'name';

                }).error(function(error) {
                    console.log(error);
                });
            };

            $scope.previous = function() {

              if(PG !== 0) {

                PG-=1;

                $http.get(URI + 'autores?total=' + TOTAL_PG + '&pg=' + PG).success(function(data) {
                      $scope.politicians = data;
                      $scope.politicianOrder = 'name';

                  }).error(function(error) {
                      console.log(error);
                  });
              }
            };

        });
})();
