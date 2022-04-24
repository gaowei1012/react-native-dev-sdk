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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var tools_1 = require("../../tools");
var Empty = function (props) {
    var height = props.height;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
            width: tools_1.width,
            height: '100%',
            alignItems: 'center',
        } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: {
                height: height ? height : '100%',
            }, resizeMethod: "auto", resizeMode: "center", source: require('../../assets/icon/empty.png') }, void 0) }), void 0));
};
exports.default = Empty;
