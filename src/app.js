(function(){
    'use strict';

    angular
        .module('profileApp',['ngRoute'])
        .config(config);

    config.$inject = ['$routeProvider','$locationProvider'];

    function config($routeProvider, $locationProvider){
        $routeProvider
            .when("/",{
                templateUrl: "main/main.html",
                controller: "MainController",
                controllerAs: "vm"
            })
            .otherwise({ redirectTo: "/"});

        $locationProvider.html5Mode({ enabled: true }).hashPrefix('!');
    }
})();