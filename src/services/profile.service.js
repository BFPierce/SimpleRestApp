(function(){
    'use strict';

    angular
        .module('app')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = ['$http'];

    function ProfileService($http){
        var model = { };

        var service = {};
        service.CreateProfile = CreateProfile;
        service.Getprofiles = GetProfiles;
        return service;

        function SetDemographics(obj){

        }

        function SetAbout(obj){

        }

        function SetAthletics(obj){
            
        }

        function CreateProfile(){

        }

        function GetProfiles(){

        }
    }

})();