(function(){
    'use strict';

    angular
        .module('profileApp')
        .controller('AboutController', AboutController);

        AboutController.$inject = ['$location','AboutService','OptionsService'];

    function AboutController($location, AboutService, OptionsService){
        var vm = this;

        vm.model = AboutService.GetModel();
        vm.services = OptionsService.GetServiceOptions();

        vm.selectedService = "";
        vm.handle = "";

        vm.Next = Next;
        vm.Previous = Previous;

        function AddService(service, handle){
            let obj = {service: srv, handle: hndl};
            vm.model.socialMedia.push(obj);
        }

        function Next(){
            AboutService.SetModel(vm.model);
            $location.path('/summary');
        }

        function Previous(){
            AboutService.SetModel(vm.model);
            $location.path('/athletics');
        }
    }

})();