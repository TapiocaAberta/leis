(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawDetailsCtrl', function($scope, $http, $stateParams) {
            $http.get('data/laws.json').success(function(data) {
                $scope.laws = data;
                $scope.law = data[$stateParams.itemId];

                if ($stateParams.itemId > 0) {
                    $scope.prevItem = Number($stateParams.itemId) - 1;
                } else {
                    $scope.prevItem = $scope.laws.length - 1;
                }

                if ($stateParams.itemId < $scope.laws.length - 1) {
                    $scope.nextItem = Number($stateParams.itemId) + 1;
                } else {
                    $scope.nextItem = 0;
                }
            });
        });
})();
