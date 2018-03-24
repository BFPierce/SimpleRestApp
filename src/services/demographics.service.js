(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('DemographicsService', DemographicsService);

    DemographicsService.$inject = ['$http'];

    function DemographicsService($http){
        var model = { 
            name: "",
            dob: "",
            nationality: "",
            location: "",
            gender: ""
        };

        var service = {};
        service.GetModel = GetModel;
        return service;

        function GetModel(){
            return model;
        }
    }

})();