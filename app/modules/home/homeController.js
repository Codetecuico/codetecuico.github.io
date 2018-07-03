(function () {

    var app = angular.module("app");

    var homeController = function ($scope, projectService) {

        var d = $("#divPL");
        d.children().on("mouseover", function () {
            $(this).stop(true, true).animate({ "padding-top": "1px" }, 200);
            $(this).css("cursor", "pointer");
        }).on("mouseleave", function () {
            $(this).stop(true, true).animate({ "padding-top": "10px" }, 200);
        })
         
        //Populating project list
        $scope.getProjects = function () { 
            projectService.getProjects()
                .then(function (data) {
                    $scope.projects = data 
                }, null);
        };

        $scope.getProjects();
    };

    app.controller("homeController", ["$scope", "projectService", homeController]);

}());