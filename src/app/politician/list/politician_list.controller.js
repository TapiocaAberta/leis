'use strict';

angular.module('lawsApp')
    .controller(
        'PoliticianListController',
        function($scope, $http) {
            $http.get('data/vereadores.json').success(function(data) {
                $scope.politicians = data;
                $scope.politicianOrder = 'name';
            });
        }
    );