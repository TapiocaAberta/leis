/* global malarkey:false, toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('lawsApp')
        .constant('malarkey', malarkey)
        .constant('toastr', toastr)
        .constant('moment', moment)
        .constant('URI', 'http://localhost:8080/api/');
        //.constant('URI', 'http://temis-server.herokuapp.com/api/');
})();
