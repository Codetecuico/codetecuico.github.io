/* global angular, toastr */
(function () {
    angular.module("ctLogger", []);
}());
/* global angular, toastr */
(function () {
    var app = angular.module("ctLogger");

    app.factory("logger", function () {
        toastr.options = {
            //"debug": false,
            "positionClass": "toast-bottom-right"
            //"onclick": null,
            //"fadeIn": 300,
            //"fadeOut": 1000,
            //"timeOut": 5000,
            //"extendedTimeOut": 1000
        };

        var _success = function (msg) {
            toastr.success(msg);
        };

        var _info = function (msg) {
            toastr.info(msg);
        };

        var _error = function (msg) {
            toastr.error(msg);
        };

        var _warning = function (msg) {
            toastr.warning(msg);
        };

        // Developer code
        var isDebugMode = true;
        var debugPrefix = "DEBUG: ";

        var _debug = {
            success(msg) {
                if (!isDebugMode) {
                    return;
                }
                toastr.success(debugPrefix + msg);
            },

            info(msg) {
                if (!isDebugMode) {
                    return;
                }
                toastr.info(debugPrefix + msg);
            },
            error(msg) {
                if (!isDebugMode) {
                    return;
                }
                toastr.error(debugPrefix + msg);
            },
            warning(msg) {
                if (!isDebugMode) {
                    return;
                }
                toastr.warning(debugPrefix + msg);
            }
        };

        return {
            debug: _debug,
            success: _success,
            info: _info,
            error: _error,
            warning: _warning
        };
    });
}());
/* global angular*/
(function () {
    angular.module("app", ["ui.router",
        "ngAnimate",
        "ctLogger"]);
}());
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
            })
            .state("about", {
                url: "/about",
                controller: "aboutController",
                templateUrl: "/app/modules/about/about.html"
            });
    });
}());
/* global angular*/
(function () {
    var mainController = function (logger) {
        logger.info("Welcome to Codetecuico");
    };

    mainController.$inject = ["logger"];

    angular.module("app")
        .controller("mainController", mainController);
}());
/* global angular*/
(function () {
    var app = angular.module("app");

    var homeController = function ($scope, projectService) {
        var d = $("#divPL");
        d.children().on("mouseover", function () {
            $(this).stop(true, true).animate({ "padding-top": "1px" }, 200);
            $(this).css("cursor", "pointer");
        }).on("mouseleave", function () {
            $(this).stop(true, true).animate({ "padding-top": "10px" }, 200);
        });

        //Populating project list
        $scope.getProjects = function () {
            projectService.getProjects()
                .then(function (data) {
                    $scope.projects = data;
                }, null);
        };

        $scope.getProjects();
    };

    app.controller("homeController", ["$scope", "projectService", homeController]);
}());
/* global angular*/
(function () {
    var app = angular.module("app");

    app.directive("projectCard", function () {
        return {
            restrict: "E",
            templateUrl: "/app/modules/home/projectCard.html",
            scope: {
                name: "@",
                url: "@"
            },
            controller($scope) {
            }
        };
    });
}());
/* global angular*/
(function () {
    var projectService = function ($http, $q) {
        var projects = [];
        var api = "/app/database/projects.json";

        var _getProjects = function () {
            var deferred = $q.defer();

            $http.get(api)
                .then(function (result) {
                    // success
                    angular.copy(result.data, projects);

                    //sort
                    projects.sort(function (a, b) {
                        return new Date(a.sortOrder) - new Date(b.sortOrder);
                    });

                    deferred.resolve(projects);
                }, function () {
                    // error
                    deferred.reject();
                });

            return deferred.promise;
        };

        return {
            getProjects: _getProjects,
        };
    };

    var module = angular.module("app");

    module.factory("projectService", ["$http", "$q", projectService]);
}());
/* global angular*/
(function () {
    var app = angular.module("app");

    app.directive("twitterPanel", function () {
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "/app/modules/home/twitterPanel.html",
            scope: {},
            controller($scope) {
                !(function (d, s, id) {
                    var js,
                        fjs = (d.getElementsByTagName(s)[0]),
                        p = (/^http:/.test(d.location) ? "http" : "https");
                    if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = p + "://platform.twitter.com/widgets.js";
                        fjs.parentNode.insertBefore(js, fjs);
                    }
                }(document, "script", "twitter-wjs"));
            }
        };
    });
}());
/* global angular*/
(function () {
    var app = angular.module("app");

    app.directive("ctHeader", function () {
        return {
            restrict: "E",
            templateUrl: "/app/shared/header.html",
            scope: {},
            controller($scope) {
            }
        };
    });
}());
/* global angular*/
(function () {
    var app = angular.module("app");

    app.directive("collapsablePanel", function () {
        return {
            restrict: "E",
            transclude: true,
            templateUrl: "/app/shared/collapsablePanel.html",
            scope: { title: "@" },
            controller($scope) {
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