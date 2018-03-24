(function(){
    'use strict';

    angular
        .module('profileApp')
        .factory('AboutService', AboutService);

        AboutService.$inject = ['$http'];

    function AboutService($http){
        var model = { };

        var service = {};
        service.GetModel = GetModel;
        return service;

        function GetModel(){

        }
    }

})();