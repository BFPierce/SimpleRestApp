(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$location','ProfileService'];

    function MainController($location, ProfileService){
        var vm = this;

        ProfileService.CreateProfile();

        vm.Next();

        function Next(){
            $location.path('/demographics');
        }
    }

})();