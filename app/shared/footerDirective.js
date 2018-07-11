/* global angular*/
(function () {
    var app = angular.module("app");

    app.directive("ctFooter", function () {
        return {
            restrict: "E",
            templateUrl: "/app/shared/footer.html",
            scope: {},
            controller($scope) {
            }
        };
    });
}());