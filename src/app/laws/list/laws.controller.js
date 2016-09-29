(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawsCtrl', function($scope, $http, $stateParams) {

          if ($stateParams.name) {

            $http.get('http://temis-server.herokuapp.com/api/laws/alderman/' + $stateParams.name)
            .success(function(data) {
                $scope.laws = data._embedded.lawList;
                $scope.lawOrder = 'code';
            })
            .error(function (error) {
              console.log(error);
            });

          } else {

            $http.get('http://temis-server.herokuapp.com/api/laws')
            .success(function(data) {
                $scope.laws = data._embedded.lawList;
                $scope.lawOrder = 'code';
            })
            .error(function (error) {
              console.log(error);
            });

          }

        });
})();
