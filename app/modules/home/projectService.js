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