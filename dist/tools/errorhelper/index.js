"use strict";
/**
 * 全局错误收集方法
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.withErrorBoundary = exports.ErrorBoundary = exports.setPromiseUnCatchHandler = exports.getGlobalErrorHandler = exports.setGlobalErrorHandler = void 0;
var promiseTracker_1 = require("./promiseTracker");
Object.defineProperty(exports, "setPromiseUnCatchHandler", { enumerable: true, get: function () { return promiseTracker_1.setPromiseUnCatchHandler; } });
var ErrorBoundary_1 = require("./errorBoundary/ErrorBoundary");
Object.defineProperty(exports, "ErrorBoundary", { enumerable: true, get: function () { return ErrorBoundary_1.ErrorBoundary; } });
var withErrorBoundary_1 = require("./errorBoundary/withErrorBoundary");
Object.defineProperty(exports, "withErrorBoundary", { enumerable: true, get: function () { return withErrorBoundary_1.withErrorBoundary; } });
var globalError_1 = require("./globalError");
Object.defineProperty(exports, "getGlobalErrorHandler", { enumerable: true, get: function () { return globalError_1.getGlobalErrorHandler; } });
Object.defineProperty(exports, "setGlobalErrorHandler", { enumerable: true, get: function () { return globalError_1.setGlobalErrorHandler; } });
