"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backStyle = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-04-16 16:44:55
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-18 17:47:46
 * @FilePath: /react-native-dev-sdk/src/tools/back/style/index.ts
 * @Description:
 */
var react_native_1 = require("react-native");
var __1 = require("../..");
var px2dp = __1.Px2dpTools.px2dp;
exports.backStyle = react_native_1.StyleSheet.create({
    back: {
        width: px2dp(18),
        height: px2dp(18),
    },
});
