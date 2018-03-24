(function(){
    'use strict';

    angular
        .module('app')
        .factory('AthleticsService', AthleticsService);

    AthleticsService.$inject = ['$http'];

    function AthleticsService($http){
        var model = { };

        var service = {};
        service.GetModel = GetModel;
        return service;

        function GetModel(){

        }
    }

})();