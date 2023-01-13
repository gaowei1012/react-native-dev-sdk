"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabBarItem = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_native_1 = require("react-native");
var TabBarItem = function (props) {
    var imgUrl = props.focused ? props.selectIcon : props.normalIcon;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Image, { resizeMode: "contain", style: { tintColor: props.tintColor, width: 25, height: 25 }, source: imgUrl }));
};
exports.TabBarItem = TabBarItem;
