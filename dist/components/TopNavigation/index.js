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
var index_1 = require("./style/index");
var react_native_1 = require("react-native");
var TopNavigator = function (_a) {
    var style = _a.style, statusBar = _a.statusBar, rightButton = _a.rightButton, titleLayoutStyle = _a.titleLayoutStyle, leftButton = _a.leftButton, hide = _a.hide, titleView = _a.titleView, fontSize = _a.fontSize, title = _a.title;
    var getButtonElement = function (ele) { return (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: index_1.styles.navBarButton }, { children: ele ? ele : null }), void 0); };
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: [index_1.styles.container, style] }, { children: [!(statusBar === null || statusBar === void 0 ? void 0 : statusBar.hiddle) ? ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: index_1.styles.statusBar }, { children: (0, jsx_runtime_1.jsx)(react_native_1.StatusBar, __assign({}, statusBar), void 0) }), void 0)) : null, !hide ? ((0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: index_1.styles.navBar }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: index_1.styles.leftBtnBox }, { children: leftButton }), void 0), (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: [index_1.styles.navBarTitleContainer, titleLayoutStyle] }, { children: titleView ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: titleView }, void 0)) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ numberOfLines: 1, style: [index_1.styles.title, { fontSize: fontSize, color: '#111' }] }, { children: title }), void 0)) }), void 0), (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: index_1.styles.rightBtnBox }, { children: getButtonElement(rightButton) }), void 0)] }), void 0)) : null] }), void 0));
};
exports.default = TopNavigator;
