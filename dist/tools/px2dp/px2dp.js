"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:44:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 22:16:31
 * @FilePath: /react-native-dev-sdk/src/tools/px2dp/px2dp.ts
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.px2dp = exports.height = exports.width = void 0;
var react_native_1 = require("react-native");
exports.width = react_native_1.Dimensions.get('window').width;
exports.height = react_native_1.Dimensions.get('window').height;
var px2dp = function (uiEleWidth) {
    var width = react_native_1.Dimensions.get('window').width;
    return (uiEleWidth * width) / 375;
};
exports.px2dp = px2dp;
