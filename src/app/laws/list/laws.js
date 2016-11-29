(function() {
    'use strict';

    angular.module('lawsApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('laws', {
                    url: '/leis',
                    templateUrl: 'app/laws/list/laws.html',
                    controller: 'LawsCtrl'
                })
                .state('laws-alderman', {
                    url: '/politicos/:name/leis',
                    templateUrl: 'app/laws/list/laws.html',
                    controller: 'LawsCtrl'
                });
        });
})();