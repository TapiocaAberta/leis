(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('TermsCtrl', function($scope, $http, $stateParams, URI) {

          $http.get(URI + 'tipo')
                  .success(function(data) {
                      $scope.tipos = data;
                  })
                  .error(function(error) {
                      console.log(error);
          });

          $http.get(URI + 'situacao-simplificada')
                  .success(function(data) {
                      $scope.situacoes = data;
                  })
                  .error(function(error) {
                      console.log(error);
          });

          $http.get(URI + 'classe')
                  .success(function(data) {
                      $scope.classes = data;
                  })
                  .error(function(error) {
                      console.log(error);
          });
          
        });

})();
