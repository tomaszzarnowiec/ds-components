(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    /* @ngInject */
    function AppController($scope) {
        var ctrl = this;

        $scope.data = {
            
        }
    }
})();
