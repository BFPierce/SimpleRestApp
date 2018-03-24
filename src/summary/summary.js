(function(){
    'use strict';

    angular
        .module('app')
        .controller('SummaryController', MainController);

    SummaryController.$inject = ['$location',
                                 'AthleticsService',
                                 'AboutService',
                                 'DemographicsService',
                                 'ProfileService'];

    function SummaryController($location, 
                               AthleticsService,
                               AboutService,
                               DemographicsService,
                               ProfileService){
        var vm = this;
    }

})();