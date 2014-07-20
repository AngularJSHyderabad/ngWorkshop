'use strict';

angular.module('ngWorkshop').factory('dataSvc', ['$http', '$q','appValues',
  function ($http, $q,appValues) {

  var itemId=15443344;
  
  function getItems(id){
    
    var searchApi="http://walmartlabs.api.mashery.com/v1/search?query=&format=json&categoryId="+id+"&apiKey="+appValues.apiKey+"&callback=JSON_CALLBACK";

    var deferred = $q.defer();
    
    $http.jsonp(searchApi).then(function(results){
           deferred.resolve(results.data);
         }, function(error){
           deferred.reject(error);
         });
         
    return deferred.promise;
  }
  
  function getCategories(){
    var deferred=$q.defer();

    $http.get('taxonomy.json')
    .then(function(results){
      deferred.resolve(results.data.categories);
    }, function(error){
      deferred.reject(error);
    });

    return deferred.promise;
  }
  
  function getItemDetails(itemId){
    var deferred=$q.defer();
    
    var itemApiUrl="http://walmartlabs.api.mashery.com/v1/items/"+itemId+"?format=json&apiKey="+appValues.apiKey+"&callback=JSON_CALLBACK";

    $http.jsonp(itemApiUrl)
    .then(function(result){
      deferred.resolve(result.data);
    }, function(error){
      deferred.reject(error);
    });
    
    return deferred.promise;
  }
  
  return{
    getItems:getItems,
    getCategories:getCategories,
    getItemDetails: getItemDetails
  };

}]);
