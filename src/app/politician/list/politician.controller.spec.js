'use strict';

describe('Controller: PoliticianCtrl', function() {

    // load the controller's module
    beforeEach(module('lawsApp'));

    var PoliticianCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        PoliticianCtrl = $controller('PoliticianCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function() {
        expect(1).toEqual(1);
    });
});
