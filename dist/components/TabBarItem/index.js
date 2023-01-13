"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var style_1 = require("./style");
var TabBarItem = function (props) {
    var imgUrl = props.focused ? props.selectIcon : props.normalIcon;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Image, { resizeMode: "contain", style: [style_1.TabBarItemStyle.container, { tintColor: props.tintColor }, props.customize], source: imgUrl }));
};
exports.default = TabBarItem;
