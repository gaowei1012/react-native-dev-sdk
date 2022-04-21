"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:44:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-21 16:45:07
 * @FilePath: /react-native-dev-sdk/src/tools/px2dp/px2dp.ts
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.px2dp = exports.height = exports.width = void 0;
var react_native_1 = require("react-native");
var width = function () {
    return react_native_1.Dimensions.get('window').width;
};
exports.width = width;
var height = function () {
    return react_native_1.Dimensions.get('window').height;
};
exports.height = height;
var px2dp = function (uiEleWidth) {
    var width = react_native_1.Dimensions.get('window').width;
    return (uiEleWidth * width) / 375;
};
exports.px2dp = px2dp;
