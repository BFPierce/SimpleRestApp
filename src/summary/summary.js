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

        ProfileService.AddToProfile(UserService.GetModel);
        ProfileService.AddToProfile(AthleticsService.GetModel);
        ProfileService.AddToProfile(AboutService.GetModel);
        ProfileService.AddToProfile(DemographicsService.GetModel);

        vm.model = ProfileService.GetModel();

        vm.Submit = Submit;
        vm.Previous = Previous;

        function Submit(){

            ProfileService.Submit(function(){
                $location.path('/main');
            });       
        }

        function Previous(){
            $location.path('/about');
        }
    }

})();