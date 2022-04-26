"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-04-26 17:04:00
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-26 17:12:19
 * @FilePath: /react-native-dev-sdk/src/tools/validator/validator.ts
 * @Description:
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorUtils = void 0;
var validator_1 = __importDefault(require("validator"));
var ValidatorUtils = /** @class */ (function () {
    function ValidatorUtils() {
        var _this = this;
        /**
         * 判断是否手机号码是否是中国手机号
         * @param phone 手机号码
         * @returns
         */
        this.isMobildPhone = function (phone) {
            if (!validator_1.default.isMobildPhone(phone, 'zh-CN'))
                throw '手机号格式错误，不支持非中国大陆手机号';
            return _this;
        };
        /**
         * 检查字符串是否是电子邮件
         * @param email 邮箱
         * @returns
         */
        this.isEmail = function (email) {
            if (!validator_1.default.isEmail(email))
                throw '邮箱格式错误';
            return _this;
        };
        /**
         * 检查字符串是否是有效的身份证代码
         * @param str 身份证号码
         * @returns
         */
        this.isIdentityCard = function (str) {
            if (!validator_1.default.isIdentityCard(str, 'any') || str.length != 18)
                throw '身份证格式错误,不支持非大陆身份证';
            return _this;
        };
        /**
         * 检查验证码是否匹配6为格式
         * @param opt 验证码
         * @returns
         */
        this.isOpt = function (opt) {
            if (opt.length != 6)
                throw '验证码格式错误';
            return _this;
        };
        /**
         * 密码长度检查
         * @param pwd 密码
         * @returns
         */
        this.isPassword = function (pwd) {
            if (!validator_1.default.isLength(pwd, { min: 6, max: 12 }))
                throw '密码长度错误:密码需要在6到12位之间';
            return _this;
        };
        /**
         * 不能为空判断
         * @param field
         * @param str
         * @returns
         */
        this.isEmpty = function (field, str) {
            if (validator_1.default.isEmpty(str))
                throw "[" + field + "]\u4E0D\u80FD\u4E3A\u7A7A";
            return _this;
        };
    }
    return ValidatorUtils;
}());
exports.ValidatorUtils = ValidatorUtils;
