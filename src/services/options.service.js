(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('OptionsService', OptionsService);

    function OptionsService(){

        var service = {};
        service.GetGenderOptions = GetGenderOptions;
        service.GetNationalityOptions = GetNationalityOptions;
        return service;

        function GetGenderOptions(){
            let options = ['','Female','Male'];
            return options;
        }

        function GetNationalityOptions(){
            let options = ['','Afghan','Albanian','Algerian','...'];
            return options;
        }

    }

})();