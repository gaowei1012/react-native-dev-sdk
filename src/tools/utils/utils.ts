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

  // 获取当前是星期几
  // 返回: "星期一"
  static getWeek(date: string) {
    let week = moment(date).day();
    switch (week) {
      case 1:
        return '周一';
      case 2:
        return '周二';
      case 3:
        return '周三';
      case 4:
        return '周四';
      case 5:
        return '周五';
      case 6:
        return '周六';
      case 0:
        return '周日';
    }
  }

  /**
   * 动态拼接url路径参数,
   *
   * obj = {
   *  username: "执念",
   *  password: "123"
   * }
   * @param obj  username=执念&password=123&...
   */
  static getUrlParams(obj: { [x: string]: any }) {
    let result = '';
    let item;
    for (item in obj) {
      if (obj[item] && String(obj[item])) {
        result += `&${item}=${obj[item]}`;
      }
    }
    if (result) {
      result = '?' + result.slice(1);
    }
    return result;
  }
}

export { Utils };
