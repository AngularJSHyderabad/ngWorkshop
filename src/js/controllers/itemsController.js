'use strict';
angular.module('ngWorkshop').controller('ItemsController', ['$scope', 'dataSvc','appValues', function ($scope, dataSvc,appValues) {

    /*dataSvc.getCategories().then(function(categories){
    $scope.categories=categories;
  }, function(error){
    console.log(error);
  });*/
  
  $scope.getItems=function(id){
      appValues.currentCategoryId=id;
    dataSvc.getItems(id).then(function(data){
      $scope.items=data.items;
      console.log($scope.items);
    });
  };
  
  $scope.categorySelected = function(){
    $scope.subCategory=null;
    $scope.getItems($scope.category.id);
    $scope.subCategories=$scope.category.children;
  };
  
  $scope.subCategorySelected=function(){
    $scope.getItems($scope.subCategory.id);
  };
  
  function init(){
      if(appValues.currentCategoryId){
          $scope.getItems(appValues.currentCategoryId);
      }
      else {
          $scope.getItems(1105910);
      }
    
    dataSvc.getCategories().then(function(data){
      console.log(data);
      $scope.categories=data;
    });
  }
  
  init();
}]);