declare class Utils {
    /**
     * 生成A-Z,字符
     * @returns string[]
     */
    static getEN(): any;
    /**
     * 处理utc时间，转换为北京时间
     * @param utcDate
     */
    static formatDate(utcDate: string, format: string | 'YYYY-MM-DD hh:ss:mm'): string;
}
export { Utils };