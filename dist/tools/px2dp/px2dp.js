"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:44:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-17 22:02:35
 * @FilePath: /react-native-dev-sdk/src/tools/px2dp/px2dp.ts
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Px2dpTools = void 0;
var react_native_1 = require("react-native");
var Px2dpTools = /** @class */ (function () {
    function Px2dpTools() {
    }
    /**
     * 获取设备可见区域宽度
     * @returns number
     */
    Px2dpTools.width = function () {
        return react_native_1.Dimensions.get('window').width;
    };
    /**
     * 获取设备可见区域高度
     * @returns number
     */
    Px2dpTools.height = function () {
        return react_native_1.Dimensions.get('window').height;
    };
    /**
     * 设置像素，根据ui尺寸适配。默认一倍图 375
     * @returns number
     */
    Px2dpTools.setPixel = function (uiEleWidth, defaultWidth) {
        var width = react_native_1.Dimensions.get('window').width;
        // return (uiEleWidth * width) / 375;
        if (defaultWidth !== undefined) {
            return (uiEleWidth * width) / 375;
        }
        else {
            return (uiEleWidth * width) / defaultWidth;
        }
    };
    return Px2dpTools;
}());
exports.Px2dpTools = Px2dpTools;
