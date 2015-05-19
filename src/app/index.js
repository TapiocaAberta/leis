'use strict';

angular.module('lawsApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })

            .state('politicianList', {
                url: '/politicos',
                templateUrl: 'app/politician/list/politician_list.html',
                controller: 'PoliticianListController'
            })

            .state('politicianDetails', {
                url: '/politicos/:itemId',
                templateUrl: 'app/politician/details/politician_details.html',
                controller: 'PoliticianDetailsController'
            })

            .state('lawList', {
                url: '/leis',
                templateUrl: 'app/laws/list/laws_list.html',
                controller: 'LawListController'
            })

            .state('lawDetails', {
                url: '/leis/:itemId',
                templateUrl: 'app/laws/details/laws_details.html',
                controller: 'LawDetailsController'
            });

        $urlRouterProvider.otherwise('/');
    })
;
