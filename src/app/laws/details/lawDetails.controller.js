(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawDetailsCtrl', function($scope, $http, $stateParams, URI, toastr) {

            if ($stateParams.id) {

                $http.get(URI + 'leis/' + $stateParams.id).success(function(data) {
                        $scope.law = data;
                    })
                    .error(function(error) {
                        console.log(error);
                    });

            }

            $scope.clickRating = function(rating) {
                if(Number.isInteger(rating)) {
                    if (0 < rating && rating < 6) {
                        $scope.vote(rating);
                    }
                }
            }

        });
})();
