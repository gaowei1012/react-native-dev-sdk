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
var tools_1 = require("../../tools");
var Pagination = function (_a) {
    var loadFunctionMore = _a.loadFunctionMore, requestFunctionData = _a.requestFunctionData, tintColor = _a.tintColor, title = _a.title, titleColor = _a.titleColor, colors = _a.colors, progressBackgroundColor = _a.progressBackgroundColor;
    var _b = (0, react_1.useState)(false), refreshBottom = _b[0], setRefreshBottom = _b[1];
    var _c = (0, react_1.useState)(false), refreshing = _c[0], setRefreshing = _c[1];
    var onMomentumScrollEnd = function (event) {
        var contentHeight = event.nativeEvent.contentSize.height;
        var scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
        var scrollOffset = event.nativeEvent.contentOffset.y;
        var isEndReached = scrollOffset + scrollViewHeight + 45 >= contentHeight; // 是否滑动到底部
        var isContentFillPage = contentHeight >= scrollViewHeight; // 内容高度是否大于列表高度
        if (isContentFillPage && isEndReached) {
            setRefreshBottom(true);
            loadFunctionMore();
            setTimeout(function () {
                setRefreshBottom(false);
            }, 800);
        }
    };
    var renderRactivityIndicator = function () { return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: tools_1.Utils.platform() ? ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: {
                position: 'absolute',
                bottom: (0, tools_1.px2dp)(-50),
                width: '100%',
            } }, { children: (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { animating: true, size: "large" }) }))) : ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, { animating: true, size: "large" })) })); };
    var onRefresh = function () {
        setRefreshing(true);
        setTimeout(function () {
            requestFunctionData();
            setRefreshing(true);
        }, 1000);
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, __assign({ style: { flex: 1 }, onScrollEndDrag: onMomentumScrollEnd, refreshControl: (0, jsx_runtime_1.jsx)(react_native_1.RefreshControl, { onRefresh: onRefresh, refreshing: refreshing, progressBackgroundColor: progressBackgroundColor, colors: colors, tintColor: tintColor, titleColor: titleColor, title: title }) }, { children: refreshBottom ? renderRactivityIndicator() : (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}) })));
};
exports.default = Pagination;
