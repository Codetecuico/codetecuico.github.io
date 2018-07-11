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