(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawDetailsCtrl', function($scope, $http, $stateParams, URI, toastr) {

            $scope.successVote = false;
            $scope.errorVote = false;
            $scope.message = '';

            if ($stateParams.code) {

                $http.get(URI + 'laws/' + $stateParams.code).success(function(data) {
                        $scope.law = data;
                    })
                    .error(function(error) {
                        console.log(error);
                    });

            }

            $scope.vote = function(rating) {
                var url = "http://temis-server.herokuapp.com/api/laws/"+ $scope.law.code +"/vote?rating=" + rating;

                $http.put(url).success(function(data) {
                    $scope.law = data;
                    $scope.successVote = true;
                    $scope.message = 'Voto computado!';

                    toastr.success('Voto computado!', '');

                }).error(function(error) {
                    console.log(error);
                    $scope.errorVote = true;
                    $scope.message = error.message;

                    toastr.success('Voto computado!', '');
                });

            };

            $scope.clickRating = function(rating) {
                if(Number.isInteger(rating)) {
                    if (0 < rating && rating < 6) {
                        $scope.vote(rating);
                    }
                }
            }

        });
})();