"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: mingwei
 * @Date: 2022-04-24 22:39:27
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 22:41:00
 * @FilePath: /react-native-dev-sdk/src/components/Loading/style/index.ts
 * @Description:
 */
var react_native_1 = require("react-native");
var tools_1 = require("../../../tools");
var styles = react_native_1.StyleSheet.create({
    loding_mask: {
        backgroundColor: '#00000073',
        position: 'absolute',
        bottom: '46%',
        width: (0, tools_1.px2dp)(120),
        height: (0, tools_1.px2dp)(120),
        borderRadius: (0, tools_1.px2dp)(6),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 9999,
    },
});
exports.default = styles;
