(function(){
    'use strict';

    angular
        .module('app')
        .factory('DemographicsService', DemographicsService);

    DemographicsService.$inject = ['$http'];

    function DemographicsService($http){
        var model = { };

        var service = {};
        service.GetModel = GetModel;
        return service;

        function GetModel(){

        }
    }

})();