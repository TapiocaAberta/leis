'use strict';

describe('Controller: PoliticanDetailsCtrl', function() {

    // load the controller's module
    beforeEach(module('lawsApp'));

    var PoliticanDetailsCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        PoliticanDetailsCtrl = $controller('PoliticanDetailsCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function() {
        expect(1).toEqual(1);
    });
});