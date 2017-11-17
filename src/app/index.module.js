(function() {

    'use strict';

    angular
        .module('lawsApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize',
            'ngResource', 'ui.router', 'ui.bootstrap', 'mgcrea.ngStrap', 'angular-input-stars', 'nvd3'
        ]).directive('loading', ['$http', function($http){
            return {
                restrict: 'A',
                link: function (scope, elm, attrs){
                    scope.isLoading = function(){
                        return $http.pendingRequests.length > 0;
                    };

                    scope.$watch(scope.isLoading, function(v){
                        if(v){
                            elm.removeAttr('style');
                        }else{
                            elm.attr('style','display:none');
                        }
                    });
                }
            }
        }]);

})();
