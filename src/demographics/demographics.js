(function(){
    'use strict';

    angular
        .module('app')
        .controller('DemographicsController', DemographicsController);

    MainController.$inject = ['$location','DemographicsService'];

    function DemographicsController($location, DemographicsService){
        var vm = this;
    }

})();