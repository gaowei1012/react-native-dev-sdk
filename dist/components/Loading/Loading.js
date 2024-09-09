"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
var style_1 = __importDefault(require("./style"));
var Loading = function (_a) {
    var size = _a.size, loadingDisplay = _a.loadingDisplay;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: [style_1.default.loding_mask, { display: loadingDisplay }] }, { children: (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { size: size, color: "#fff" }) })));
};
exports.default = (0, react_1.memo)(Loading, function () {
    return false;
});
