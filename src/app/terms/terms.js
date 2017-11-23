(function() {
    'use strict';

    angular.module('lawsApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('termos', {
                    url: '/entenda-os-termos',
                    templateUrl: 'app/terms/terms.html',
                    controller: 'TermsCtrl'
                });
        });
})();
