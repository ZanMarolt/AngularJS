describe('PostsCtrl', function() {

	beforeEach(module('AngularTest'));

	var scope,ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('PostsCtrl', {$scope: scope});
    }));	

	it('should ...', inject(function() {

		expect(1).toEqual(1);
		
	}));

});