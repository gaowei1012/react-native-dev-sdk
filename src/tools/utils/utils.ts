/*
 * @Author: mingwei
 * @Date: 2022-04-20 09:46:43
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-05 09:45:30
 * @FilePath: /react-native-dev-sdk/src/tools/utils/utils.ts
 * @Description:
 */
import moment from 'moment';
import _ from 'lodash';
import cnchar from 'cnchar';
import 'cnchar-poly';
import { PolyMap } from '../../config/polyMap';
import { Platform } from 'react-native';
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
   * 处理tree数据，格式为 [{title: 'xxx', id: 'xxx'}, {title: 'xxx', id: 'xxx'}]
   * @param targetData 目标数据
   * @returns [A:[{title: 'xx', id:'xx'}],B:[{title: 'xx', id:'xx'}]]
   */
  static formatTargetData(targetData: any[]) {
    if (targetData.length == 0) return;
    // 处理多音字
    cnchar.setSpellDefault(PolyMap);
    // 按照拼音A-Z排序
    let _sortTargetData = _.sortBy(targetData, node => {
      return cnchar.spell(node.title);
    });
    // 取treeData里面的拼音首字母
    let _targetHeaderData = _.map(_sortTargetData, (value, key) => {
      return key;
    });
    let _oldTargetData = _.groupBy(_sortTargetData, node => {
      return cnchar.spell(node.title, 'first')[0];
    });
    // 处理数据格式，用于页面渲染
    let _targetData = _.map(_oldTargetData, (value, key) => {
      return { [key]: value };
    });
    return { _targetHeaderData, _targetData };
  }

  // 判断机型平台
  static platform() {
    return Platform.OS === 'ios' ? true : false;
  }

  // 判断数据结构类型
  static type(option: number | string | Array<any> | Object) {
    return Object.prototype.toString.call(option);
  }
}

export { Utils };
