(function() {
    'use strict';

    angular
        .module('app')
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                // route for the home page
                .when('/', {
                    templateUrl : 'dist/app/views/grid/grid.html',
                    controller  : 'GridController'
                })

                // route for the about page
                .when('/grid', {
                    templateUrl : 'dist/app/views/grid/grid.html',
                    controller  : 'GridController'
                })

                // route for the contact page
                .when('/panels', {
                    templateUrl : 'dist/app/views/panels/panels.html',
                    controller  : 'PanelsController'
                })

                .when('/buttons', {
                    templateUrl : 'dist/app/views/buttons/buttons.html',
                    controller  : 'ButtonsController'
                })

                .otherwise({
                    redirectTo: '/'
                })

            $locationProvider.hashPrefix('');
        });
})();
