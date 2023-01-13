"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBoundary = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var react_1 = require("react");
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasError: false,
            error: null,
        };
        return _this;
    }
    ErrorBoundary.getDerivedStateFromError = function (error) {
        return { hansError: true, error: error };
    };
    ErrorBoundary.prototype.componentDidCatch = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var onDidCatch = this.props.onDidCatch;
        onDidCatch && onDidCatch.apply(void 0, args);
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.props, children = _a.children, renderBoundary = _a.renderBoundary;
        var _b = this.state, hasError = _b.hasError, error = _b.error;
        if (hasError) {
            if (renderBoundary && typeof renderBoundary === 'function') {
                return renderBoundary({ error: error });
            }
            else {
                return (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: "Something went wrong." });
            }
        }
        return children;
    };
    return ErrorBoundary;
}(react_1.Component));
exports.ErrorBoundary = ErrorBoundary;
