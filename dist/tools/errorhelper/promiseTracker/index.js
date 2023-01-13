"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPromiseUnCatchHandler = void 0;
var noop = function () { };
/**
 *
 * @param {Function} customHandler
 * @param {Boolean} allowedInDevMode
 * @returns
 */
var setPromiseUnCatchHandler = function (customHandler, allowedInDevMode) {
    if (customHandler === void 0) { customHandler = noop; }
    if (allowedInDevMode === void 0) { allowedInDevMode = false; }
    if (typeof customHandler !== 'function' || typeof allowedInDevMode !== 'boolean') {
        console.log('setPromiseUnCatchHandler is called with wrong argument types.. first argument should be callback function and second argument is optional should be a boolean');
        console.log('Not setting the JS handler .. please fix setPromiseUnCatchHandler call');
        return;
    }
    // @ts-ignore
    var allowed = allowedInDevMode ? true : !__DEV__;
    if (allowed) {
        // @ts-ignore
        require('promise/setimmediate/rejection-tracking').enable({
            allRejections: true,
            onUnhandled: customHandler,
            onHandled: function (id) {
                var warning = "Promise Rejection Handled (id: ".concat(id, ")\n") +
                    'This means you can ignore any previous messages of the form ' +
                    "\"Possible Unhandled Promise Rejection (id: ".concat(id, "):\"");
                console.warn(warning);
            },
        });
    }
    else {
        console.log('Skipping setPromiseUnCatchHandler: Reason: In DEV mode and allowedInDevMode = false');
    }
};
exports.setPromiseUnCatchHandler = setPromiseUnCatchHandler;
