(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('PoliticanDetailsCtrl', function($scope, $http, $stateParams) {
            $http.get('data/vereadores.json').success(function(data) {
                $scope.politicians = data;
                $scope.whichItem = $stateParams.itemId;

                if ($stateParams.itemId > 0) {
                    $scope.prevItem = Number($stateParams.itemId) - 1;
                } else {
                    $scope.prevItem = $scope.politicians.length - 1;
                }

                if ($stateParams.itemId < $scope.politicians.length - 1) {
                    $scope.nextItem = Number($stateParams.itemId) + 1;
                } else {
                    $scope.nextItem = 0;
                }
            });
        });
})();