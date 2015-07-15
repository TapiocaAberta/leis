'use strict';

angular.module('lawsApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('laws', {
                url: '/leis',
                templateUrl: 'app/laws/list/laws.html',
                controller: 'LawsCtrl'
            });
    });