/**
 * Created by solomon on 16/2/23.
 */

describe('test myapp controller', function(){
    beforeEach(angular.mock.module('myApp'));
    var $controller;
    beforeEach(angular.mock.inject(function(_$controller_){
        $controller = _$controller_;
    }));
    it('should be set by the initial value', function(){
        var $scope = {};
        var controller = $controller('MyController', { $scope: $scope });
        expect($scope.greetMe).toEqual('World');
    })
});