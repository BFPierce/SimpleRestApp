(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('ProfileService', ProfileService);

    ProfileService.$inject = ['$http','$window'];

    function ProfileService($http, $window){
        var profiles = null;

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
            const host = $window.location.hostname;

            let testobj = {
                name: "Test",
                dob: "Test2",
                nationality: "Test3",
                location: "Test4",
                gender: "Test5",
                association: "Test6",
                team: "Test7",
                sports: "Test8",
                about: "Test9",
                interests: "Test10",
                charities: "Test11",
                about: "Test12",
                socialMedia: [{service: "Test13", handle: "Test14"}, {service: "Test15", handle: "Test16"}],
                pets: "Test17",
                petsDescription: "Test18",
                drinksAlcohol: "Test19",
                married: "Test20",
                user: "Test Testerson"
            };

            $http({
                method: "POST",
                data: testobj,
                url: "https://" + host + "/profile"
            })
            .then(function (response){
                console.log(response);
            });
        }

        function GetProfiles(){

        }
    }

})();