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
            template: 'users',
            sorting: {
                columns: [
                    {
                        columnName: 'UserName',
                        columnNameDisplay: 'User name',
                        sortable: true,
                        sort: true
                    },
                    {
                        columnName: 'Amount',
                        columnNameDisplay: 'Amount',
                        sortable: true
                    }
                ]
            },
            rows: [
                {
                    username: "Tom Doe",
                    amount: 1300,
                    position: "Amazon",
                    birthDate: "2001-10-18",
                    avatar: "https://randomuser.me/api/portraits/men/27.jpg"
                },
                {
                    username: "John Smith",
                    amount: 2300,
                    position: "Google",
                    birthDate: "1988-10-18",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                    username: "Anna Northsmith",
                    amount: 4100,
                    position: "Twitter",
                    birthDate: "1993-04-15",
                    avatar: "https://randomuser.me/api/portraits/women/21.jpg"
                }
            ]
        }
    }
})();
