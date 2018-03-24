(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('DemographicsController', DemographicsController);

    DemographicsController.$inject = ['$location','DemographicsService','OptionsService'];

    function DemographicsController($location, DemographicsService, OptionsService){
        var vm = this;

        vm.nationalities = OptionsService.GetNationalityOptions();
        vm.genders = OptionsService.GetGenderOptions();

        vm.Next = Next;
        vm.Previous = Previous;

        function Next(){
            $location.path('/athletics');
        }

        function Previous(){
            $location.path('/main');
        }
    }

})();