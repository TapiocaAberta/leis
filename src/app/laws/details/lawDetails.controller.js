(function() {
    'use strict';

    angular.module('lawsApp')
        .controller('LawDetailsCtrl', function($scope, $http, $stateParams) {

          if ($stateParams.code) {
          }

            $http.get('http://temis-server.herokuapp.com/api/laws/' + $stateParams.code)
            .success(function(data) {
                $scope.law = data;
            })
            .error(function (error) {
              console.log(error);
            });

        })
        .filter('markdown', function($sce) {
            var converter = new Showdown.converter();
            return function(value) {
                var html = converter.makeHtml(value || '');
                return $sce.trustAsHtml(html);
            };
        });
})();
