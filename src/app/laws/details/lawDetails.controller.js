(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawDetailsCtrl', function($scope, $http, $stateParams, URI) {

          if ($stateParams.code) {

            $http.get(URI + 'laws/' + $stateParams.code).success(function(data) {
                $scope.law = data;
            })
            .error(function (error) {
              console.log(error);
            });

          }

          $scope.vote = function(url) {
            
            $http.put(url).success(function(data) {
              $scope.law = data;
            }).error(function (error) {
              console.log(error);
            });
          };

        });
})();
