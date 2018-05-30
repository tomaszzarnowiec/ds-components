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
        var ctrl = this;

        ctrl.reverseSort = false;

        this.sortBy = function(prop){
            ctrl.reverseSort = (ctrl.orderBy === prop) ? !ctrl.reverseSort : false;
            ctrl.orderBy = prop;
        }

    }
})();
