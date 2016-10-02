(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawsCtrl', function($scope, $http, $stateParams) {

          if ($stateParams.name) {

            $http.get('http://temis-server.herokuapp.com/api/laws/alderman/' + $stateParams.name)
            .success(function(data) {
                $scope.laws = data._embedded.lawList;
                $scope._links = data._links;
                $scope.lawOrder = 'code';
            })
            .error(function (error) {
              console.log(error);
            });

          } else {

            $http.get('http://temis-server.herokuapp.com/api/laws')
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
