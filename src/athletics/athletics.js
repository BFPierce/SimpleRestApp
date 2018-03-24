(function(){
    'use strict';

    angular
        .module('app')
        .controller('AthleticsController', AthleticsController);

    MainController.$inject = ['$location','AthleticsService'];

    function MainController($location, AthleticsService){
        var vm = this;
    }

})();