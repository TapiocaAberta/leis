(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawsCtrl', function($scope, $http, $stateParams, URI) {

            $scope.PG = 0;
            $scope.direction = 'desc';
            $scope.filtro = {situacao:{}, classe:{}, tipo:{}, ano:null};

            preecheForm();
            getLaws();

            function preecheForm() {

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

            }

            function getLaws() {

              var URL = URI + 'leis/filtra?total=6&pg=' + $scope.PG;

              URL = (typeof $scope.filtro.situacao.id === 'undefined' || !$scope.filtro.situacao.id) ? URL : URL + '&idSituacao=' + $scope.filtro.situacao.id;
              URL = (typeof $scope.filtro.classe.id === 'undefined' || !$scope.filtro.classe.id) ?  URL : URL + '&idClasse=' + $scope.filtro.classe.id;
              URL = (typeof $scope.filtro.tipo.id === 'undefined' || !$scope.filtro.tipo.id) ? URL :  URL + '&idTipo=' + $scope.filtro.tipo.id;
              URL = (typeof $scope.filtro.ano === 'undefined' || !$scope.filtro.ano) ?  URL : URL + '&ano=' + $scope.filtro.ano;

              $http.get(URL)
                      .success(function(data) {
                          $scope.laws = data;
                          $scope.lawOrder = 'id';
                      })
                      .error(function(error) {
                          console.log(error);
              });
            }

            $scope.filtrar = function() {
              getLaws();
            };

            $scope.next = function() {
              $scope.PG+=1;
              getLaws();
            };

            $scope.previous = function() {
              if($scope.PG !==0) {
                $scope.PG -=1;
                getLaws();
              }
            };

        });
})();
