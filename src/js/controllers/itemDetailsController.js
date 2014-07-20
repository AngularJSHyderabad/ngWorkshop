angular.module('ngWorkshop').controller('ItemDetailsController', ['$scope', '$routeParams', '$location', 'dataSvc', function ($scope, $routeParams, $location, dataSvc) {

	init();
	  
	  function init(){
	    if($routeParams.id){
	      dataSvc.getItemDetails($routeParams.id)
	             .then(function(data){
	               $scope.itemDetails = data;
	             }, function(error){
	               console.log(error);
	             });
	    }
	    else{
	      $location.redirect('/home');
	    }
	  }
}]);