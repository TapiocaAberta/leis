(function() {
    'use strict';

    angular
        .module('lawsApp')
        .config(config);

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
    }

})();
