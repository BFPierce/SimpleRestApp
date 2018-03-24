// In an idea; world this service would interact with a database or
// web service to populate options, 
// that isn't getting built today so this is just placeholder

(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('OptionsService', OptionsService);

    function OptionsService(){

        var service = {};
        service.GetGenderOptions = GetGenderOptions;
        service.GetNationalityOptions = GetNationalityOptions;
        service.GetSportsOptions = GetSportsOptions;
        service.GetTeamOptions = GetTeamOptions;
        return service;

        function GetGenderOptions(){
            let options = ['','Female','Male'];
            return options;
        }

        function GetNationalityOptions(){
            let options = ['','Afghan','Albanian','Algerian','...'];
            return options;
        }

        function GetSportsOptions(){
            let options = ['','Football','Soccer','Hockey','...'];
            return options;
        }

        function GetTeamOptions(){
            let options = ['','Maple Leafs','Buffalo Bills','Buffalo Sabres','...'];
            return options;
        }

    }

})();