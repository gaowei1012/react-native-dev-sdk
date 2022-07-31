"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var moment_1 = __importDefault(require("moment"));
var lodash_1 = __importDefault(require("lodash"));
var cnchar_1 = __importDefault(require("cnchar"));
require("cnchar-poly");
var polyMap_1 = require("../../config/polyMap");
var react_native_1 = require("react-native");
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
     * 处理tree数据，格式为 [{title: 'xxx', id: 'xxx'}, {title: 'xxx', id: 'xxx'}]
     * @param targetData 目标数据
     * @returns [A:[{title: 'xx', id:'xx'}],B:[{title: 'xx', id:'xx'}]]
     */
    Utils.formatTargetData = function (targetData) {
        if (targetData.length == 0)
            return;
        // 处理多音字
        cnchar_1.default.setSpellDefault(polyMap_1.PolyMap);
        // 按照拼音A-Z排序
        var _sortTargetData = lodash_1.default.sortBy(targetData, function (node) {
            return cnchar_1.default.spell(node.title);
        });
        // 取treeData里面的拼音首字母
        var _targetHeaderData = lodash_1.default.map(_sortTargetData, function (value, key) {
            return key;
        });
        var _oldTargetData = lodash_1.default.groupBy(_sortTargetData, function (node) {
            return cnchar_1.default.spell(node.title, 'first')[0];
        });
        // 处理数据格式，用于页面渲染
        var _targetData = lodash_1.default.map(_oldTargetData, function (value, key) {
            var _a;
            return _a = {}, _a[key] = value, _a;
        });
        return { _targetHeaderData: _targetHeaderData, _targetData: _targetData };
    };
    // 判断机型平台
    Utils.platform = function () {
        return react_native_1.Platform.OS === 'ios' ? true : false;
    };
    // 判断数据结构类型
    Utils.type = function (option) {
        return Object.prototype.toString.call(option);
    };
    return Utils;
}());
exports.Utils = Utils;
