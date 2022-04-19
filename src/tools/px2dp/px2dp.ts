/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:44:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-19 09:09:53
 * @FilePath: /react-native-dev-sdk/src/tools/px2dp/px2dp.ts
 * @Description:
 */

import { Dimensions } from 'react-native';

class Px2dpTools {
  static defaultWidth: number;

  /**
   * 设置ui初始尺寸
   * @param width number
   */
  static installWidth(width: number) {
    this.defaultWidth = width;
  }

  /**
   * 获取设备可见区域宽度
   * @returns number
   */
  static width() {
    return Dimensions.get('window').width;
  }
  /**
   * 获取设备可见区域高度
   * @returns number
   */
  static height() {
    return Dimensions.get('window').height;
  }
  /**
   * 设置像素，根据ui尺寸适配。默认一倍图 375
   * @returns number
   */
  static px2dp(uiEleWidth: number): number {
    const width = Dimensions.get('window').width;
    console.log('defaultWidth: ==>', this.defaultWidth);
    // return (uiEleWidth * width) / this.defaultWidth;
    return (uiEleWidth * width) / 375;
    // if (defaultWidth !== undefined) {
    //   return (uiEleWidth * width) / 375;
    // } else {
    //   return (uiEleWidth * width) / defaultWidth;
    // }
  }
}

export { Px2dpTools };
