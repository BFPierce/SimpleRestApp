(function(){
    'use strict';

    angular
        .module('profileApp')
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