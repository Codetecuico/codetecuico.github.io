(function () {
    var app = angular.module("app");

    app.directive("ctHeader", function () {
        return {
            restrict: "E",
            templateUrl: "/app/shared/header.html",
            scope: {},
            controller: function ($scope) {
            }
        };
    });
}());