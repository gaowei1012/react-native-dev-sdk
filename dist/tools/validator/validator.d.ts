declare class ValidatorUtils {
    /**
     * 判断是否手机号码是否是中国手机号
     * @param phone 手机号码
     * @returns
     */
    isMobildPhone: (phone: number) => this;
    /**
     * 检查字符串是否是电子邮件
     * @param email 邮箱
     * @returns
     */
    isEmail: (email: string) => this;
    /**
     * 检查字符串是否是有效的身份证代码
     * @param str 身份证号码
     * @returns
     */
    isIdentityCard: (str: string) => this;
    /**
     * 检查验证码是否匹配6为格式
     * @param opt 验证码
     * @returns
     */
    isOpt: (opt: string) => this;
    /**
     * 密码长度检查
     * @param pwd 密码
     * @returns
     */
    isPassword: (pwd: string) => this;
    /**
     * 不能为空判断
     * @param field
     * @param str
     * @returns
     */
    isEmpty: (field: string, str: string) => this;
}
export { ValidatorUtils };
