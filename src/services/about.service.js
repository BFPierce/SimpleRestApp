(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('AboutService', AboutService);

    function AboutService(){
        var model = { 
            interests: "",
            charities: "",
            socialMedia: [],
            pets: "",
            petsDescription: "",
            drinkAlcohol: "",
            married: ""
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