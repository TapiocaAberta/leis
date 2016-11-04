(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawsCtrl', function($scope, $http, $stateParams, URI) {

          $scope.direction = 'desc';

          if ($stateParams.name) {

            $http.get(URI + 'alderman/' + $stateParams.name + '/law')
            .success(function(data) {
                $scope.laws = data._embedded.lawList;
                $scope._links = data._links;
                $scope.lawOrder = 'code';
            })
            .error(function (error) {
              console.log(error);
            });

          } else {

            $http.get(URI + 'laws')
            .success(function(data) {
                $scope.laws = data._embedded.lawList;
                $scope._links = data._links;
                $scope.lawOrder = 'code';
            })
            .error(function (error) {
              console.log(error);
            });

          }

          $scope.next = function(url) {

            $http.get(url)
            .success(function(data) {
              $scope.laws = data._embedded.lawList;
              $scope._links = data._links;
              $scope.lawOrder = 'code';
            })
            .error(function (error) {
              console.log(error);
            });
          };

          $scope.previous = function(url) {

            $http.get(url)
            .success(function(data) {
              $scope.laws = data._embedded.lawList;
              $scope._links = data._links;
              $scope.lawOrder = 'code';
            })
            .error(function (error) {
              console.log(error);
            });

          };

        });
})();
