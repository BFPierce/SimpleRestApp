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
            .when("/demographics",{
                templateUrl: "demographics/demographics.html",
                controller: "DemographicsController",
                controllerAs: "vm"
            })
            .when("/athletics",{
                templateUrl: "athletics/athletics.html",
                controller: "AthleticsController",
                controllerAs: "vm"
            })
            .when("/about",{
                templateUrl: "about/about.html",
                controller: "AboutController",
                controllerAs: "vm"
            })
            .when("/summary",{
                templateUrl: "summary/summary.html",
                controller: "SummaryController",
                controllerAs: "vm"
            })
            .otherwise({ redirectTo: "/"});

        $locationProvider.html5Mode({ enabled: true }).hashPrefix('!');
    }
})();