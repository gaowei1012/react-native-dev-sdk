"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-04-20 09:46:43
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-20 09:48:53
 * @FilePath: /react-native-dev-sdk/src/tools/utils/utils.ts
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * 生成A-Z,字符
     * @returns string[]
     */
    Utils.getEN = function () {
        var arr = [];
        for (var i = 65; i < 91; i++)
            arr.push(String.fromCharCode(i));
        return arr.join(',');
    };
    return Utils;
}());
exports.Utils = Utils;
