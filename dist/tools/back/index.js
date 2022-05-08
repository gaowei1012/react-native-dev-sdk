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
var navigate_1 = require("../navigate");
var style_1 = require("./style");
var GoBack = function (props) {
    var action = props.action, url = props.url;
    action = action ? action : function () { return navigate_1.NavigatorUtils.back(); };
    return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ activeOpacity: 1, onPress: action }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: style_1.backStyle.back, source: url }, void 0) }), void 0));
};
exports.default = GoBack;
