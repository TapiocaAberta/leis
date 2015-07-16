(function() {
    'use strict';

    angular.module('lawsApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('politicanDetails', {
                    url: '/politicos/:itemId',
                    templateUrl: 'app/politician/details/politicanDetails.html',
                    controller: 'PoliticanDetailsCtrl'
                });
        });

})();