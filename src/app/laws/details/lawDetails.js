(function() {
    'use strict';

    angular.module('lawsApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('lawDetails', {
                    url: '/leis/detalhe',
                    templateUrl: 'app/laws/details/lawDetails.html',
                    controller: 'LawDetailsCtrl'
                });
        });
})();