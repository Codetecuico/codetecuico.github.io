/* global angular*/
(function () {
    var app = angular.module("app");

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                controller: "homeController",
                templateUrl: "/app/modules/home/home.html"
            });
    });
}());