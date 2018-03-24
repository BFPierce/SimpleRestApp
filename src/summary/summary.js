(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('SummaryController', SummaryController);

    SummaryController.$inject = ['$location',
                                 'UserService',
                                 'AthleticsService',
                                 'AboutService',
                                 'DemographicsService',
                                 'ProfileService'];

    function SummaryController($location, 
                               UserService,
                               AthleticsService,
                               AboutService,
                               DemographicsService,
                               ProfileService){
        var vm = this;


        vm.Submit = Submit;
        vm.Previous = Previous;

        function Submit(){

            // This will be attached to the promise later!
            $location.path('/main');
        }

        function Previous(){
            $location.path('/about');
        }
    }

})();