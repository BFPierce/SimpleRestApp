(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('DemographicsController', DemographicsController);

    DemographicsController.$inject = ['$location','DemographicsService'];

    function DemographicsController($location, DemographicsService){
        var vm = this;
    }

})();