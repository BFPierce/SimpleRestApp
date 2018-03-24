(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = ['$http','$window'];

    function ProfileService($http, $window){
        var profileData = {};

        var service = {};
        service.CreateProfile = CreateProfile;
        service.Getprofiles = GetProfiles;
        return service;

        function AddToProfile(obj){
            for(let key in obj){
                if(obj.hasOwnProperty(key))
                    profileData[key] = obj.key;
            }

            console.log(this.profileData);
        }

        function CreateProfile(callback){
            const host = $window.location.hostname;

            $http({
                method: "POST",
                data: this.profileData,
                url: "https://" + host + "/profile"
            })
            .then(function (response){
                callback(response);
            });
        }

        function GetProfiles(){

        }
    }

})();