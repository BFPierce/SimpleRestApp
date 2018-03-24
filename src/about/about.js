(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('AboutController', AboutController);

        AboutController.$inject = ['$location','AboutService'];

    function AboutController($location, AboutService){
        var vm = this;

        vm.Next();
        vm.Previous();

        function Next(){
            $location.path('/summary');
        }

        function Previous(){
            $location.path('athletics');
        }
    }

})();