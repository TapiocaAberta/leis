(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('PoliticianCtrl', function($scope, $http, URI) {

            $http.get(URI + 'alderman').success(function(data) {

                $scope.politicians = data._embedded.aldermanList;
                $scope._links = data._links;
                $scope.politicianOrder = 'name';

            }).error(function(error) {
                console.log(error);
            });

            $scope.next = function(url) {

                $http.get(url).success(function(data) {
                    $scope.politicians = data._embedded.aldermanList;
                    $scope._links = data._links;
                    $scope.politicianOrder = 'name';

                }).error(function(error) {
                    console.log(error);
                });
            };

            $scope.previous = function(url) {

                $http.get(url).success(function(data) {
                    $scope.politicians = data._embedded.aldermanList;
                    $scope._links = data._links;
                    $scope.politicianOrder = 'name';

                }).error(function(error) {
                    console.log(error);
                });

            };

        });
})();