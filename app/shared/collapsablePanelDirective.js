(function () {
    var app = angular.module("app");

    app.directive("collapsablePanel", function () {
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "/app/shared/collapsablePanel.html",
            scope: { title: "@" },
            controller: function ($scope) {
                var ph = $(".card-header");
                ph.off("click"); //clear on click event
                ph.on("click", function () {
                    $(this).next().stop(true, true).slideToggle("fast");
                    $(this).find("i").toggleClass("octicon-chevron-up octicon-chevron-down");
                });
            }
        };
    });
}());