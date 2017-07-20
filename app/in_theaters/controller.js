(function (angular) {
    'use strict'

    angular
        .module('moviecat.in_theaters',[])
        .config(['$routeProvider',function($routeProvider){
            $routeProvider
                .when('./in_theaters',{
                    templateUrl:'./in_theaters/view.html',
                    controller:'InTheatersController'
                })
        }])
        .controller('InTheatersController',['$scope','$http',function($scope,$http){
            // 简单的GET请求示例:
            // $http({
            //   // 请求类型: 类似与 ajax 的type
            //   method: 'GET',
            //   // 请求地址
            //   url: './in_theaters/data.json'
            // })
            $http.get('./in_theaters/data.json')
                .then(function successCallback(response){
                    //成功的回调函数 response 就是
                    //ajax 请求成功的返回值
                    //response.data 就是我们需要的数据
                    console.log(response);
                    $scope.data=response.data;
                },function errorCallback(response) {
                    //失败的回调函数
                })
        }])
})(angular)