(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('AthleticsController', AthleticsController);

    AthleticsController.$inject = ['$location','AthleticsService','OptionsService'];

    function AthleticsController($location, AthleticsService, OptionsService){
        var vm = this;

        vm.sports = OptionsService.GetSportsOptions();
        vm.teams = OptionsService.GetTeamOptions();

        vm.Next = Next;
        vm.Previous = Previous;

        function Next(){
            $location.path('/about');
        }

        function Previous(){
            $location.path('/demographics');
        }
    }

})();