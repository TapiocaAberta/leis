/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('lawsApp')
        .constant('moment', moment)
        //.constant('URI', 'http://localhost:8080/api/v2/');
        .constant('URI', 'http://104.131.106.85:8080/api/v2/');
})();
