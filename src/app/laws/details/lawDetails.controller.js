(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawDetailsCtrl', function($scope, $http, $stateParams, URI) {

          $scope.successVote = false;
          $scope.errorVote   = false;
          $scope.message     = '';

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

              $scope.law         = data;
              $scope.successVote = true;
              $scope.message     = 'Voto computado!';

            }).error(function (error) {
              console.log(error);
              $scope.errorVote   = true;
              $scope.message     = error.message;
            });

          };

          $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
          };


        });
})();
