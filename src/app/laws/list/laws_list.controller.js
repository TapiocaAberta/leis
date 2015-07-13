'use strict';

angular.module('lawsApp')
    .controller('LawListController', function($scope, $http) {
        $http.get('data/laws.json').success(function(data) {
            $scope.laws = data;
            $scope.lawOrder = 'name';
        });
    });