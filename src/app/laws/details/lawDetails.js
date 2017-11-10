(function() {
    'use strict';

    angular.module('lawsApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('lawDetails', {
                    url: '/leis/:id',
                    templateUrl: 'app/laws/details/lawDetails.html',
                    controller: 'LawDetailsCtrl'
                });
        });
})();
