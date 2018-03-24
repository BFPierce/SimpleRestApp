(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('UserService', UserService);

    //UserService.$inject = [];

    function UserService(){
        var userName = "Test Testerson";

        var service = {};
        service.GetUser = GetUser;
        return service;

        function GetUser(){
            return this.userName;
        }
    }

})();