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
exports.DynamicTabNavigator = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("react-native-gesture-handler");
var navigate_1 = require("../navigate");
var native_1 = require("@react-navigation/native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var native_stack_1 = require("@react-navigation/native-stack");
var RootNavigatorBottom_1 = require("./RootNavigatorBottom");
var initNavihator = navigate_1.NavigatorUtils.initNavihator;
var Stack = (0, native_stack_1.createNativeStackNavigator)();
var DynamicTabNavigator = function (props) {
    var children = props.children;
    return ((0, jsx_runtime_1.jsx)(react_native_safe_area_context_1.SafeAreaProvider, { children: (0, jsx_runtime_1.jsx)(native_1.NavigationContainer, __assign({ ref: function (navigatorRef) { return initNavihator(navigatorRef); } }, { children: (0, jsx_runtime_1.jsxs)(Stack.Navigator, __assign({ screenOptions: { headerShown: false } }, { children: [(0, jsx_runtime_1.jsx)(Stack.Screen, { name: "root", component: RootNavigatorBottom_1.RootNavigatorBottom }, void 0), children] }), void 0) }), void 0) }, void 0));
};
exports.DynamicTabNavigator = DynamicTabNavigator;
