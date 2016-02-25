/**
 * Created by solomon on 16/2/23.
 */

angular.module('myApp', [])
    .controller('MyController', ['$scope', function ($scope) {
        $scope.greetMe = 'World';
    }]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['myApp']);
});