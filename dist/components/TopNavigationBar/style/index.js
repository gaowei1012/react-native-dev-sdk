"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = exports.nav_bar_h = exports.status_bar_h = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-04-29 17:15:38
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-04 17:26:10
 * @FilePath: /react-native-dev-sdk/src/components/topNavigationBar/style/index.ts
 * @Description:
 */
var react_native_1 = require("react-native");
var tools_1 = require("../../../tools");
var NAV_BAR_H_IOS = 44;
var NAV_BAR_H_ANDROID = 50;
exports.status_bar_h = react_native_1.Platform.OS === 'ios' ? 20 : null;
exports.nav_bar_h = react_native_1.Platform.OS === 'ios' ? NAV_BAR_H_IOS : NAV_BAR_H_ANDROID;
var styles = react_native_1.StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: exports.nav_bar_h,
        paddingHorizontal: (0, tools_1.px2dp)(15),
    },
    navBarTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navBarButton: {
        alignItems: 'center',
    },
    container: {
    // backgroundColor: '#fff', // 设置背景颜色
    },
    title: {
        width: (0, tools_1.px2dp)(200),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    statusBar: {
    // height: status_bar_h ? status_bar_h : '',
    },
    leftBtnBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: (0, tools_1.px2dp)(50),
        height: exports.nav_bar_h, // 根据平台设置高度
    },
    rightBtnBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: (0, tools_1.px2dp)(60),
        height: exports.nav_bar_h, // 根据平台设置高度
    },
});
exports.styles = styles;
