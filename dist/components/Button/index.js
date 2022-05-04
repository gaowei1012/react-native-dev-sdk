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
var style_1 = require("./style");
var Button = function (_a) {
    var text = _a.text, onPress = _a.onPress, buttonPropsStyle = _a.buttonPropsStyle, type = _a.type;
    var platform = react_native_1.Platform.OS == 'ios' ? true : false;
    var theme = type == 'default' ? style_1.buttonStyle.default : '';
    var renderIosButton = function () { return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ style: [style_1.buttonStyle.wrap, theme, buttonPropsStyle], onPress: onPress, activeOpacity: 1 }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: text }, void 0) }), void 0)); };
    var renderAndroidButton = function () { return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: [style_1.buttonStyle.wrap, buttonPropsStyle] }, { children: (0, jsx_runtime_1.jsx)(react_native_1.TouchableNativeFeedback, __assign({ onPress: onPress }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { children: text }, void 0) }), void 0) }), void 0)); };
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: platform ? renderIosButton() : renderAndroidButton() }, void 0);
};
exports.default = Button;
