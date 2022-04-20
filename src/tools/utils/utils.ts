/*
 * @Author: mingwei
 * @Date: 2022-04-20 09:46:43
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-20 10:40:46
 * @FilePath: /react-native-dev-sdk/src/tools/utils/utils.ts
 * @Description:
 */
import moment from 'moment';
class Utils {
  /**
   * 生成A-Z,字符
   * @returns string[]
   */
  static getEN() {
    let arr: any = [];
    for (let i = 65; i < 91; i++) arr.push(String.fromCharCode(i));
    return arr.join(',');
  }

  /**
   * 处理utc时间，转换为北京时间
   * @param utcDate
   */
  static formatDate(utcDate: string, format: string | 'YYYY-MM-DD hh:ss:mm') {
    let date = new Date(utcDate);
    date.setHours(date.getHours() - 8);
    return moment(date).format(format);
  }
}

export { Utils };
