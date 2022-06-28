"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-06-28 09:13:29
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-28 09:13:31
 * @FilePath: /react-native-dev-sdk/src/components/Dialog/style/index.ts
 * @Description:
 */
var tools_1 = require("../../../tools");
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    dialogWrap: {
        flex: 1,
        width: tools_1.width,
        height: tools_1.height,
        backgroundColor: 'rgba(34, 34, 46, 0.39)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogContent: {
        width: (0, tools_1.px2dp)(320),
        alignItems: 'center',
        height: (0, tools_1.px2dp)(220),
        backgroundColor: '#fff',
        borderRadius: (0, tools_1.px2dp)(6),
        overflow: 'hidden',
    },
    dialogButton: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: (0, tools_1.px2dp)(46),
        flexDirection: 'row',
        borderTopColor: '#ddd',
        borderTopWidth: 0.5,
        justifyContent: 'space-between',
    },
    dialogBtnWrap: {
        width: '50%',
        borderRightColor: '#ddd',
        borderRightWidth: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    children: {
        paddingTop: (0, tools_1.px2dp)(22),
        alignItems: 'center',
    },
    actionText: {
        color: '#3A84D9',
    },
    btnText: {
        fontSize: (0, tools_1.px2dp)(15),
    },
    title: {
        fontSize: (0, tools_1.px2dp)(18),
    },
    content: {
        padding: (0, tools_1.px2dp)(12),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contentLine: {
        lineHeight: (0, tools_1.px2dp)(26),
        // fontWeight: '500',
        fontSize: (0, tools_1.px2dp)(15),
    },
});
exports.styles = styles;
