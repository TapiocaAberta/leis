(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawDetailsCtrl', function($scope, $http, $stateParams) {

          if ($stateParams.code) {

            $http.get('http://temis-server.herokuapp.com/api/laws/' + $stateParams.code)
            .success(function(data) {
                $scope.law = data;
            })
            .error(function (error) {
              console.log(error);
            });

          }

        });
})();
