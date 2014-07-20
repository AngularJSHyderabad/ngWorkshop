'use strict';

angular.module('ngWorkshop')

.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/home', {templateUrl:'/tpl/home.html', controller:'ItemsController'})
                .when('/item/:id',{templateUrl:'/tpl/itemDetails.html',controller:'ItemDetailsController'})
                .otherwise({redirectTo:'/home'});
}]);