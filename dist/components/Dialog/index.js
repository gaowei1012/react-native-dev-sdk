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
var Dialog = function (props) {
    var visible = props.visible, confirm = props.confirm, cancel = props.cancel, children = props.children;
    var dialogBtnWrap = function (text, bool) { return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ onPress: function () {
            bool ? cancel() : confirm();
        }, activeOpacity: 0.9, style: style_1.styles.dialogBtnWrap }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: [style_1.styles.btnText, !bool ? style_1.styles.actionText : null] }, { children: text }), void 0) }), void 0)); };
    return ((0, jsx_runtime_1.jsx)(react_native_1.Modal, __assign({ transparent: true, visible: visible, animationType: "fade" }, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: [style_1.styles.dialogWrap] }, { children: (0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: style_1.styles.dialogContent }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: style_1.styles.children }, { children: children }), void 0), (0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: style_1.styles.dialogButton }, { children: [dialogBtnWrap('暂不使用', true), dialogBtnWrap('同意', false)] }), void 0)] }), void 0) }), void 0) }), void 0));
};
exports.default = Dialog;
