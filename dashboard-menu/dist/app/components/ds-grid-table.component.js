(function() {
    'use strict';

    angular
        .module('app')
        .component('dsGridTable', dsGridTable());

    /* @ngInject */
    function dsGridTable() {
        var component = {
            templateUrl: 'dist/app/components/ds-grid-table.component.html',
            controller: DsGridTableController,
            bindings: {
                data: '='
            }
        };

        return component;
    }

    DsGridTableController.$inject = ['$scope'];

    /* @ngInject */
    function DsGridTableController($scope) {

    }
})();
