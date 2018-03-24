(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('DemographicsController', DemographicsController);

    DemographicsController.$inject = ['$location','DemographicsService'];

    function DemographicsController($location, DemographicsService){
        var vm = this;

        vm.Next();
        vm.Previous();

        function Next(){
            $location.path('/athletics');
        }

        function Previous(){
            $location.path('/main');
        }
    }

})();