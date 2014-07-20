angular.module('ngWorkshop').directive('singleItem', function() {
    return {
    	restrict: 'E',
    	replace: 'true',
      	templateUrl: '/tpl/singleItem.html'
    };
});