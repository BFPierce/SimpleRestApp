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
        service.SetModel = SetModel;
        return service;

        function GetModel(){
            return this.model;
        }

        function SetModel(obj){
            this.model = obj;
        }
    }

})();