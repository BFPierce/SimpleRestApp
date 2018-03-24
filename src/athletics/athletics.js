(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('AthleticsController', AthleticsController);

    AthleticsController.$inject = ['$location','AthleticsService'];

    function AthleticsController($location, AthleticsService){
        var vm = this;

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