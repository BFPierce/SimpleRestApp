(function(){
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$location','ProfileService'];

    function MainController($location, ProfileService){
        var vm = this;
    }

})();