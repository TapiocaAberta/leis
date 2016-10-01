(function() {
    'use strict';

    import ngInfiniteScroll from 'ng-infinite-scroll';

    angular
        .module('lawsApp')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastr, ngInfiniteScroll) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastr.options.timeOut = 3000;
        toastr.options.positionClass = 'toast-top-right';
        toastr.options.preventDuplicates = true;
        toastr.options.progressBar = true;
    }

})();
