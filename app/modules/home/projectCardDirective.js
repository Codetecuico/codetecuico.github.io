/* global angular*/
(function () {
    var app = angular.module("app");

    app.directive("projectCard", function () {
        return {
            restrict: "E",
            templateUrl: "/app/modules/home/projectCard.html",
            scope: {
                title: "@",
                description: "@",
                url: "@"
            },
            controller($scope) {
            }
        };
    });
}());