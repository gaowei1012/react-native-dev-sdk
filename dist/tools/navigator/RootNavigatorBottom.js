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
exports.RootNavigatorBottom = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var TabBarItem_1 = require("./TabBarItem");
var tabsdata = [
    {
        route: 'homepage',
        normalIcon: '',
        selectIcon: '',
        components: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0),
        title: '首页',
    },
    {
        route: 'profilepage',
        normalIcon: '',
        selectIcon: '',
        components: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0),
        title: '设置',
    },
];
var Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
var RootNavigatorBottom = function (props) {
    var tabs = props.tabs;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: tabs.map(function (r) { return ((0, jsx_runtime_1.jsx)(Tab.Navigator, __assign({ screenOptions: function (_a) {
                var route = _a.route;
                return ({
                    tabBarIcon: function (_a) {
                        var focused = _a.focused;
                        if (route.name == r['route']) {
                            return ((0, jsx_runtime_1.jsx)(TabBarItem_1.TabBarItem, { focused: focused, normalIcon: r.normalIcon, selectIcon: r.selectIcon }, void 0));
                        }
                    },
                });
            } }, { children: (0, jsx_runtime_1.jsx)(Tab.Screen, { name: r.route, component: r.components, options: { tabBarLabel: r.title } }, void 0) }), void 0)); }) }, void 0));
};
exports.RootNavigatorBottom = RootNavigatorBottom;
