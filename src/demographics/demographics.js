(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('DemographicsController', DemographicsController);

    DemographicsController.$inject = ['$location','DemographicsService','OptionsService'];

    function DemographicsController($location, DemographicsService, OptionsService){
        var vm = this;

        vm.model = DemographicsService.GetModel();
        vm.nationalities = OptionsService.GetNationalityOptions();
        vm.genders = OptionsService.GetGenderOptions();

        vm.Next = Next;
        vm.Previous = Previous;

        function Next(){
            DemographicsService.SetModel(vm.model);
            $location.path('/athletics');
        }

        function Previous(){
            DemographicsService.SetModel(vm.model);
            $location.path('/main');
        }
    }

})();