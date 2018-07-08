(function () {
    var app = angular.module("app");

    app.directive("collapsablePanel", function () {
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "/app/shared/collapsablePanel.html",
            scope: { title: "@" },
            controller: function ($scope) {
                var ph = $(".panel-heading");
                ph.off("click"); //clear on click event
                ph.on("click", function () {
                    $(this).next().stop(true, true).slideToggle("fast");
                    $(this).find("span").toggleClass("glyphicon-menu-up glyphicon-menu-down");
                });
            }
        };
    });
}());