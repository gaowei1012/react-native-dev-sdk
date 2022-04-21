"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-04-20 09:46:43
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-21 16:41:12
 * @FilePath: /react-native-dev-sdk/src/tools/utils/utils.ts
 * @Description:
 */
var moment_1 = __importDefault(require("moment"));
var lodash_1 = __importDefault(require("lodash"));
var pinyinUtil_1 = require("./pinyinUtil");
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
    /**
     * 处理数据头部
     * @param targetData 目标数据
     * @returns
     */
    Utils.formatTargetData = function (targetData) {
        var _targetHeaderData = [];
        var _targetData = __spreadArray([], targetData, true);
        lodash_1.default.forEach(targetData, function (org) {
            var firstLetterStr = pinyinUtil_1.PinyinUtil.getFirstLetter(org.title);
            // const firstLetterStr = pinyin(org.title, { pattern: 'initial', type: 'array' });
            // console.log('getName', firstLetterStr.substr(0, 1));
            if (_targetHeaderData.indexOf(firstLetterStr) === -1) {
                _targetHeaderData.push(firstLetterStr);
                if (_targetData.indexOf(org) > -1) {
                    _targetData.splice(_targetData.indexOf(org), 0, {
                        title: firstLetterStr,
                        head: true,
                    });
                }
            }
        });
        // console.log(_targetHeaderData, _targetData);
        return { _targetHeaderData: _targetHeaderData, _targetData: _targetData };
    };
    return Utils;
}());
exports.Utils = Utils;
