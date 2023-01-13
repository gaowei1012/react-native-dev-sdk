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
var style_1 = require("./style");
var react_native_1 = require("react-native");
var Search = function (props, searchPropsStyle) {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: style_1.searchStyle.search_wrap }, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: [style_1.searchStyle.search_left_wrap, { backgroundColor: searchPropsStyle.backgroundColor }] }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.TextInput, __assign({ style: style_1.searchStyle.search_textinput }, props)), (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: style_1.searchStyle.search_content_wrap }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Image, { style: style_1.searchStyle.search_icon, source: props.searchIcon }) }))] })), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ activeOpacity: 0.8 }, props, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: searchPropsStyle.searchOnpressText }, { children: "\u641C\u7D22" })) }))] })));
};
exports.default = Search;
