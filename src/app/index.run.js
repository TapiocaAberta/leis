(function() {
    'use strict';

    angular
        .module('lawsApp')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {

        $log.debug('runBlock end');
    }

})();
