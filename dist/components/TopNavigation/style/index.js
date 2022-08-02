"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
var react_native_1 = require("react-native");
var tools_1 = require("../../../tools");
var NAV_BAR_H_IOS = 40;
var NAV_BAR_H_ANDROID = 50;
// const status_bar_h = Platform.OS === 'ios' ? 20 : null;
var nav_bar_h = react_native_1.Platform.OS === 'ios' ? NAV_BAR_H_IOS : NAV_BAR_H_ANDROID;
var styles = react_native_1.StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: nav_bar_h,
        // paddingHorizontal: px2dp(15),
        width: tools_1.width,
    },
    navBarTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    navBarButton: {
        alignItems: 'center',
        // justifyContent: 'center',
        // width: px2dp(30),
        // height: px2dp(40),
    },
    container: {
    // backgroundColor: '#85DFD2', // 设置背景颜色
    },
    title: {
        width: (0, tools_1.px2dp)(200),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    leftIcon: {
        width: (0, tools_1.px2dp)(22),
        height: (0, tools_1.px2dp)(22),
    },
    statusBar: {
    // height: status_bar_h ? status_bar_h : '',
    },
    leftBtnBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: (0, tools_1.px2dp)(50),
        paddingLeft: (0, tools_1.px2dp)(6),
        // height: NAV_BAR_H, // 根据平台设置高度
    },
    rightBtnBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: (0, tools_1.px2dp)(50),
    },
});
exports.styles = styles;
