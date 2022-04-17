"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backStyle = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-04-16 16:44:55
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-17 21:50:49
 * @FilePath: /react-native-dev-sdk/src/tools/back/style/index.ts
 * @Description:
 */
var react_native_1 = require("react-native");
var __1 = require("../..");
var setPixel = __1.Px2dpTools.setPixel;
exports.backStyle = react_native_1.StyleSheet.create({
    back: {
        width: setPixel(18),
        height: setPixel(18),
    },
});
