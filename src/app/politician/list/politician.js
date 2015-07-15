(function() {
    'use strict';

    angular.module('lawsApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('politician', {
                    url: '/politicos',
                    templateUrl: 'app/politician/list/politician.html',
                    controller: 'PoliticianCtrl'
                });
        });
})();