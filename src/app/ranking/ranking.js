(function() {
    'use strict';

    angular.module('lawsApp')
        .config(function($stateProvider) {
            $stateProvider
                .state('ranking', {
                    url: '/ranking',
                    templateUrl: 'app/ranking/ranking.html',
                    controller: 'RankingCtrl'
                });
        });
})();
