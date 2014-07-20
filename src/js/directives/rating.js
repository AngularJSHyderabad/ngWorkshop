angular.module('ngWorkshop').directive('rating', function() {
    return {
        restrict: 'E',
        templateUrl: '/tpl/rating.html',
        link: function(scope, elem, attrs){
            attrs.$observe("ratingImage", function(){
                if(attrs.ratingImage){
                    elem.find("span").css("display","none");
                    elem.find("img").css("display","inline");
                }
                else{
                    elem.find("img").css("display","none");
                }
            });

            attrs.$observe("avgRating", function(){
                if(attrs.avgRating){
                    elem.find("img").attr("src",attrs.ratingImage)
                        .attr("alt","Average Rating: "+attrs.avgRating);
                    elem.attr('title',"Average Rating: "+attrs.avgRating);
                }
                else{
                    elem.find("img").css("display","none");
                }
            });
        }
    };
});