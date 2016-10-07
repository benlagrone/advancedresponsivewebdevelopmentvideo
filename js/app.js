'use strict';

angular.module('myapp',['ngRoute'])
    .controller('page1', function($scope){
        $scope.message = "this is page 1";


    })
    .controller('page2', function($scope){
        $scope.message = "this is page 2";
    })
    .directive('navigation',function($route){
        return {
            restrict: 'E',
            templateUrl: 'templates/navigation.html',
            link: function(scope) {
                scope.routesArray = [];
                angular.forEach($route.routes,function(value,key){
                    value.url = "#"+value.originalPath;
                    if(value.name!=undefined){
                        scope.routesArray.push(value)
                    }
                });
            }
        };
    })
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/page1', {templateUrl: 'templates/page1.html', controller: 'page1',name:"Page 1"});
        $routeProvider.when('/page2', {templateUrl: 'templates/page2.html', controller: 'page2',name:"Page 2"});
        $routeProvider.otherwise({redirectTo: '/page1'});
    }]);
