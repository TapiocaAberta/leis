(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawsCtrl', function($scope, $http) {
            $http.get('data/laws.json').success(function(data) {
                $scope.laws = data;
                $scope.lawOrder = 'name';
            });
        });
})();