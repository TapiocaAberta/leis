(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawDetailsCtrl', function($scope, $http, $stateParams, URI, toastr) {

          $scope.messageSuccess = '';
          $scope.messageError = '';

            if ($stateParams.id) {

                $http.get(URI + 'leis/' + $stateParams.id).success(function(data) {
                        $scope.law = data;

                }) .error(function(error) {
                  console.log(error);
                });

            }

            $scope.clickRating = function(rating) {
                if(Number.isInteger(rating)) {
                    if (0 < rating && rating < 6) {
                        $scope.vote(rating);
                    }
                }
            };

            $scope.vote = function(rating) {

              $http.put(URI + 'leis/' + $stateParams.id + '?rating=' + rating).success(function(data) {

                 $scope.law = data;
                 $scope.messageSuccess = 'Voto computado!';

              }) .error(function(error) {
                console.log(error);
                $scope.messageError = error.mensagem;
              });
            };
        });
})();
