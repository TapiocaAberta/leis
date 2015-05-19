'use strict';

var politicianControllers = angular.module('politicianControllers', []);

politicianControllers.controller('PoliticianListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/vereadores.json').success(function (data) {
        $scope.politicians = data;
        $scope.politicianOrder = 'name';
    });
}]);
