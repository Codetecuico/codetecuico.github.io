/* global angular*/
(function () {
    var mainController = function (logger) {
        logger.info("Welcome to Codetecuico");
    };

    mainController.$inject = ["logger"];

    angular.module("app")
        .controller("mainController", mainController);
}());