(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('PoliticianCtrl', function($scope, $http, URI, TOTAL_ITENS) {

          $scope.totalPorPg = 9;
          $scope.pgAtual = 1;

          buscaDados();

          function buscaDados() {

            $http.get(URI + 'autores?total=' + $scope.totalPorPg + '&pg=' + ($scope.pgAtual - 1)).success(function(data, status, headers) {

                $scope.politicians = data;
                $scope.totalItens = headers(TOTAL_ITENS);

            }).error(function(error, status, header) {
                console.log(error);
            });
            
          }

          $scope.pageChanged = function() {
            buscaDados();
          };

        });
})();
