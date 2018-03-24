(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$location','ProfileService'];

    function MainController($location, ProfileService){
        var vm = this;

        vm.Next();

        function Next(){
            $location.path('/demographics');
        }
    }

})();