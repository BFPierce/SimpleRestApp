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
    }

})();