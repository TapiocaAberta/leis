'use strict';

describe('Controller: LawsCtrl', function() {

    // load the controller's module
    beforeEach(module('lawsApp'));

    var LawsCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        LawsCtrl = $controller('LawsCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function() {
        expect(1).toEqual(1);
    });
});