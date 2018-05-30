(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$http'];

    /* @ngInject */
    function AppController($scope, $http) {
        var ctrl = this;

        var avatars = [
            "https://randomuser.me/api/portraits/men/27.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg",
            "https://randomuser.me/api/portraits/women/21.jpg",
            "https://randomuser.me/api/portraits/women/50.jpg",
            "https://randomuser.me/api/portraits/women/57.jpg",
            "https://randomuser.me/api/portraits/men/58.jpg",
            "https://randomuser.me/api/portraits/women/46.jpg"
        ]

        this.getUsers = function(){
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
                rows: []
            };

            $http.get('https://jsonplaceholder.typicode.com/users').then(
                function(response){

                    angular.forEach(response.data, function(item){
                        item.avatar = avatars[Math.floor(Math.random()*avatars.length)];
                        item.amount = Math.floor((Math.random() * 10000) + 1000);
                    })

                    $scope.data.rows = response.data;

                    console.log($scope.data);
                }
            )
        }

        ctrl.getUsers();


        // $scope.data = {
        //     template: 'users',
        //     sorting: {
        //         columns: [
        //             {
        //                 columnName: 'UserName',
        //                 columnNameDisplay: 'User name',
        //                 sortable: true,
        //                 sort: true
        //             },
        //             {
        //                 columnName: 'Amount',
        //                 columnNameDisplay: 'Amount',
        //                 sortable: true
        //             }
        //         ]
        //     },
        //     rows: [
        //         {
        //             username: "Tom Doe",
        //             amount: 1300,
        //             position: "Amazon",
        //             birthDate: "2001-10-18",
        //             avatar: "https://randomuser.me/api/portraits/men/27.jpg"
        //         },
        //         {
        //             username: "John Smith",
        //             amount: 2300,
        //             position: "Google",
        //             birthDate: "1988-10-18",
        //             avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        //         },
        //         {
        //             username: "Anna Northsmith",
        //             amount: 4100,
        //             position: "Twitter",
        //             birthDate: "1993-04-15",
        //             avatar: "https://randomuser.me/api/portraits/women/21.jpg"
        //         }
        //     ]
        // }
    }
})();
