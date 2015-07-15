(function() {
    'use strict';

    angular.module('lawsApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('politicanDetails', {
                    url: '/politicos/detalhe',
                    templateUrl: 'app/politician/details/politicanDetails.html',
                    controller: 'PoliticanDetailsCtrl'
                });
        });

})();