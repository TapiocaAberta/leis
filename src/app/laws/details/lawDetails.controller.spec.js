(function() {
    'use strict';

    describe('Controller: LawDetailsCtrl', function() {

        // load the controller's module
        beforeEach(module('lawsApp'));

        var LawDetailsCtrl, scope;

        // Initialize the controller and a mock scope
        beforeEach(inject(function($controller, $rootScope) {
            scope = $rootScope.$new();
            LawDetailsCtrl = $controller('LawDetailsCtrl', {
                $scope: scope
            });
        }));

        it('should ...', function() {
            expect(1).toEqual(1);
        });
    });
})();