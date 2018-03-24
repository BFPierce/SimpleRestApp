(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('AthleticsController', AthleticsController);

    AthleticsController.$inject = ['$location','AthleticsService','OptionsService'];

    function AthleticsController($location, AthleticsService, OptionsService){
        var vm = this;

        vm.model = AthleticsService.GetModel();
        vm.sports = OptionsService.GetSportsOptions();
        vm.teams = OptionsService.GetTeamOptions();

        vm.Next = Next;
        vm.Previous = Previous;

        function Next(){
            AthleticsService.SetModel(vm.model);
            $location.path('/about');
        }

        function Previous(){
            AthleticsService.SetModel(vm.model);
            $location.path('/demographics');
        }
    }

})();