'use strict';

angular.module('lawsApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial', 'markdown'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        var base_path = "";

        $urlRouterProvider.rule(function ($injector, $location) {
            var path = $location.path();
            var hasTrailingSlash = path[path.length - 1] === '/';

            if (hasTrailingSlash) {
                //if last charcter is a slash, return the same url without the slash  
                base_path = path.substr(0, path.length - 1);
                return base_path;
            }
        });

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })

            .state('politicianList', {
                url: base_path + '/politicos',
                templateUrl: 'app/politician/list/politician_list.html',
                controller: 'PoliticianListController'
            })

            .state('politicianDetails', {
                url: base_path + '/politicos/:itemId',
                templateUrl: 'app/politician/details/politician_details.html',
                controller: 'PoliticianDetailsController'
            })

            .state('lawList', {
                url: base_path + '/leis',
                templateUrl: 'app/laws/list/laws_list.html',
                controller: 'LawListController'
            })

            .state('lawDetails', {
                url: base_path + '/leis/:itemId',
                templateUrl: 'app/laws/details/law_details.html',
                controller: 'LawDetailsController'
            });

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    })
;
