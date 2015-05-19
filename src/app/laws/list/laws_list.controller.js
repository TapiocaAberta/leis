'use strict';

var lawControllers = angular.module('lawControllers', []);

lawControllers.controller('LawListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/laws.json').success(function (data) {
        $scope.laws = data;
        $scope.lawOrder = 'name';
    });
}]);