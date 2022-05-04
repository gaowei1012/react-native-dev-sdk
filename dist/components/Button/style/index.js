"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonStyle = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-05-04 17:35:57
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-04 17:35:58
 * @FilePath: /react-native-dev-sdk/src/components/Button/style/index.ts
 * @Description:
 */
var react_native_1 = require("react-native");
var tools_1 = require("../../../tools");
exports.buttonStyle = react_native_1.StyleSheet.create({
    wrap: {
        height: (0, tools_1.px2dp)(32),
        borderRadius: (0, tools_1.px2dp)(4),
        alignItems: 'center',
        justifyContent: 'center',
    },
    default: {
        backgroundColor: '#ddd',
    },
});
