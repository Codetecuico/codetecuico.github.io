/* global angular*/
(function () {
    var app = angular.module("app");

    app.directive("serviceCard", function () {
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "/app/modules/home/serviceCard.html",
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