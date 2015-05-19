'use strict';

var politicianControllers = angular.module('politicianControllers', []);

politicianControllers.controller('PoliticianDetailsController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $http.get('data/vereadores.json').success(function (data) {
        $scope.politicians = data;
        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevItem = $scope.politicians.length - 1;
        }

        if ($routeParams.itemId < $scope.politicians.length - 1) {
            $scope.nextItem = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextItem = 0;
        }

    });
}]);