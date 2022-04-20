/*
 * @Author: mingwei
 * @Date: 2022-04-20 09:46:43
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-20 09:48:53
 * @FilePath: /react-native-dev-sdk/src/tools/utils/utils.ts
 * @Description:
 */

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
}

export { Utils };
