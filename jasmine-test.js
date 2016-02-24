describe("Test Suite", function () {
    beforeEach(function () { //setup
        module('app');
    });
    it("1. Testing for adding temperature", inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('UserController', {
            $scope: scope
        });
        scope.temp = "34";
        scope.addTemp();
        expect(scope.temps.length).toEqual(1);
    }));
    it("2. Testing for adding temperature as a string", inject(function ($rootScope, $controller) {

        var scope = $rootScope.$new();
        $controller('UserController', {
            $scope: scope
        });
        scope.temp = "abc";
        scope.addTemp();
        expect(scope.temps.length).toEqual(0);
    }));
    it("3. Testing for median temperature odd", inject(function ($rootScope, $controller) {
        var scope = $rootScope.$new();
        $controller('UserController', {
            $scope: scope
        });
        scope.temps = [5, 1, -7, 7, 8, 3];
        scope.getMedianTemp();
        expect(scope.medianTemp).toEqual(4);
    }));
    it("4. Testing for median temperature even", inject(function ($rootScope, $controller) {
        var scope = $rootScope.$new();
        $controller('UserController', {
            $scope: scope
        });
        scope.temps = [5, 1, -7, 7, 8, 3, 9];
        scope.getMedianTemp();
        expect(scope.medianTemp).toEqual(5);
    }));

});