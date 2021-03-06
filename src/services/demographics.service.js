(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('DemographicsService', DemographicsService);

    function DemographicsService(){
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