(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('AthleticsController', AthleticsController);

    AthleticsController.$inject = ['$location','AthleticsService'];

    function AthleticsController($location, AthleticsService){
        var vm = this;
    }

})();