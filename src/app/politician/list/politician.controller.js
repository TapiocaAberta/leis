(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('PoliticianCtrl', function($scope, $http) {
          
            $http.get('http://temis-server.herokuapp.com/api/alderman').success(function(data) {

                $scope.politicians = data;
                $scope.politicianOrder = 'name';

            }).error(function (error) {
              console.log(error);
            });

        });
})();
