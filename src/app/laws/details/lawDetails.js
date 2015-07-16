(function() {
    'use strict';

    angular.module('lawsApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('lawDetails', {
                    url: '/leis/:itemId',
                    templateUrl: 'app/laws/details/lawDetails.html',
                    controller: 'LawDetailsCtrl'
                });
        });
})();