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
/*
 * @Author: mingwei
 * @Date: 2022-04-29 13:16:42
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-29 14:17:19
 * @FilePath: /react-native-dev-sdk/src/components/Colors/ColorView.tsx
 * @Description:
 */
var react_1 = require("react");
var react_native_1 = require("react-native");
var ColorView = function () {
    var viewRef = (0, react_1.useRef)(null);
    var renderColorView = function () { return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({}, react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function (e, gestureState) { return true; },
        onStartShouldSetPanResponderCapture: function (e, gestureState) { return true; },
        onMoveShouldSetPanResponder: function (e, gestureState) { return true; },
        onMoveShouldSetPanResponderCapture: function (e, gestureState) { return true; },
        onPanResponderGrant: function (evt, gestureState) {
            // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
            // gestureState.{x,y} 现在会被设置为0
        },
        onPanResponderMove: function (evt, gestureState) {
            // 最近一次的移动距离为gestureState.move{X,Y}
            // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
        },
        onPanResponderTerminationRequest: function (evt, gestureState) { return true; },
        onPanResponderRelease: function (evt, gestureState) {
            // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
            // 一般来说这意味着一个手势操作已经成功完成。
        },
        onPanResponderTerminate: function (evt, gestureState) {
            // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
        },
        onShouldBlockNativeResponder: function (evt, gestureState) {
            // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
            // 默认返回true。目前暂时只支持android。
            return true;
        },
    }).panHandlers, { style: {
            position: 'absolute',
            backgroundColor: '#fff',
        } }), void 0)); };
    var onLayout = function (nativeEvent) { };
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ ref: viewRef, onLayout: function (nativeEvent) { return onLayout(nativeEvent); } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.View, { children: renderColorView() }, void 0) }), void 0));
};
exports.default = ColorView;
