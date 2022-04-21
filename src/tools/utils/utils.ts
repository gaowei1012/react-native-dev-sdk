/*
 * @Author: mingwei
 * @Date: 2022-04-20 09:46:43
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-21 16:41:12
 * @FilePath: /react-native-dev-sdk/src/tools/utils/utils.ts
 * @Description:
 */
import moment from 'moment';
import _ from 'lodash';
import { PinyinUtil } from './pinyinUtil';
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

  /**
   * 处理数据头部
   * @param targetData 目标数据
   * @returns
   */
  static formatTargetData(targetData: any[]) {
    let _targetHeaderData: any[] = [];
    let _targetData = [...targetData];
    _.forEach(targetData, org => {
      const firstLetterStr = PinyinUtil.getFirstLetter(org.title);
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
    return { _targetHeaderData, _targetData };
  }
}

export { Utils };
