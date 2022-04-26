/*
 * @Author: mingwei
 * @Date: 2022-04-26 17:04:00
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-26 17:12:19
 * @FilePath: /react-native-dev-sdk/src/tools/validator/validator.ts
 * @Description:
 */

import validator from 'validator';

class ValidatorUtils {
  /**
   * 判断是否手机号码是否是中国手机号
   * @param phone 手机号码
   * @returns
   */
  isMobildPhone = (phone: number) => {
    if (!validator.isMobildPhone(phone, 'zh-CN')) throw '手机号格式错误，不支持非中国大陆手机号';
    return this;
  };

  /**
   * 检查字符串是否是电子邮件
   * @param email 邮箱
   * @returns
   */
  isEmail = (email: string) => {
    if (!validator.isEmail(email)) throw '邮箱格式错误';
    return this;
  };
  /**
   * 检查字符串是否是有效的身份证代码
   * @param str 身份证号码
   * @returns
   */
  isIdentityCard = (str: string) => {
    if (!validator.isIdentityCard(str, 'any') || str.length != 18)
      throw '身份证格式错误,不支持非大陆身份证';
    return this;
  };
  /**
   * 检查验证码是否匹配6为格式
   * @param opt 验证码
   * @returns
   */
  isOpt = (opt: string) => {
    if (opt.length != 6) throw '验证码格式错误';
    return this;
  };
  /**
   * 密码长度检查
   * @param pwd 密码
   * @returns
   */
  isPassword = (pwd: string) => {
    if (!validator.isLength(pwd, { min: 6, max: 12 })) throw '密码长度错误:密码需要在6到12位之间';
    return this;
  };
  /**
   * 不能为空判断
   * @param field
   * @param str
   * @returns
   */
  isEmpty = (field: string, str: string) => {
    if (validator.isEmpty(str)) throw `[${field}]不能为空`;
    return this;
  };
}

export { ValidatorUtils };
