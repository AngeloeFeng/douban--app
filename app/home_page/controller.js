(function  (angular){
    'use strict'

    angular
        .module('moviecat.home_page',[])
        .config(['$routeProvider',function ($routeProvider){
            $routeProvider
                .when('/home_page',{
                    templateUrl:'./home_page/view.html',
                    controller:'HomeController'
                })
                // .otherwise({
                //     redirectTo: './index.html'
                // });

        }])
        .controller('HomeController',['$scope',function ($scope){

        }])

})(angular)