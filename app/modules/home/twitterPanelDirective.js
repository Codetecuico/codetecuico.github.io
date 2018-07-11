(function () {
    var app = angular.module("app");

    app.directive("twitterPanel", function () {
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "/app/modules/home/twitterPanel.html",
            scope: {},
            controller($scope) {
                !function (d, s, id) { var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? "http" : "https"; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + "://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs); } }(document, "script", "twitter-wjs");
            }
        };
    });
}());