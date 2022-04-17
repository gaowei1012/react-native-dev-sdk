"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:44:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-16 16:36:52
 * @FilePath: /react-native-dev-sdk/tools/px2dp/px2dp.ts
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.px2dp = exports.height = exports.widtth = void 0;
var react_native_1 = require("react-native");
// 这里定义设计稿尺寸，这里默认使用一倍图
var defaultWidth = 375;
var widtth = react_native_1.Dimensions.get('window').width;
exports.widtth = widtth;
var height = react_native_1.Dimensions.get('window').height;
exports.height = height;
// 计算屏幕像素大小
var px2dp = function (uiEleWidth) {
    return (uiEleWidth * widtth) / defaultWidth;
};
exports.px2dp = px2dp;
