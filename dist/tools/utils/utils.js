"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-04-20 09:46:43
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-20 10:40:46
 * @FilePath: /react-native-dev-sdk/src/tools/utils/utils.ts
 * @Description:
 */
var moment_1 = __importDefault(require("moment"));
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
    /**
     * 处理utc时间，转换为北京时间
     * @param utcDate
     */
    Utils.formatDate = function (utcDate, format) {
        var date = new Date(utcDate);
        date.setHours(date.getHours() - 8);
        return (0, moment_1.default)(date).format(format);
    };
    return Utils;
}());
exports.Utils = Utils;
