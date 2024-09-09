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
var react_1 = require("react");
var react_native_1 = require("react-native");
var style_1 = require("./style");
var tools_1 = require("../../tools");
var buttonOptions = {
    default: 'default',
};
var Button = function (_a) {
    var text = _a.text, onPress = _a.onPress, buttonPropsStyle = _a.buttonPropsStyle, type = _a.type;
    var theme = type == 'default' ? buttonOptions[type] : '';
    var renderIosButton = function () { return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ style: [style_1.buttonStyle.wrap, style_1.buttonStyle[theme], buttonPropsStyle], onPress: onPress, activeOpacity: 0.8 }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: text }) }))); };
    var renderAndroidButton = function () { return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: [style_1.buttonStyle.wrap, style_1.buttonStyle[theme], buttonPropsStyle] }, { children: (0, jsx_runtime_1.jsx)(react_native_1.TouchableNativeFeedback, __assign({ onPress: onPress }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: text }) })) }))); };
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: tools_1.Utils.platform() ? renderIosButton() : renderAndroidButton() });
};
exports.default = (0, react_1.memo)(Button, function () {
    return false;
});
