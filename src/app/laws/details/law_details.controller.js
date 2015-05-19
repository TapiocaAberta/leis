'use strict';

var lawControllers = angular.module('lawControllers', []);

lawControllers.controller('LawDetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('data/laws.json').success(function (data) {
        $scope.laws = data;
        $scope.law = data[$routeParams.itemId];

        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.laws.length - 1;
        }

        if ($routeParams.itemId < $scope.laws.length - 1) {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }

    });
}]);