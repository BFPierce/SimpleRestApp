(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('AthleticsService', AthleticsService);

    function AthleticsService(){
        var model = { 
            association: "",
            team: "",
            sports: "",
            about: ""
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