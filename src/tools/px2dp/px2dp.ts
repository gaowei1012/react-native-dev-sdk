/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:44:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-17 17:45:55
 * @FilePath: /react-native-dev-sdk/src/tools/px2dp/px2dp.ts
 * @Description:
 */

import { Dimensions } from 'react-native';

class Px2dpTools {
  /**
   * 获取设备可见区域宽度
   * @returns number
   */
  static getWidth() {
    return Dimensions.get('window').width;
  }
  /**
   * 获取设备可见区域高度
   * @returns number
   */
  static getHeight() {
    return Dimensions.get('window').height;
  }
  /**
   * 设置像素，根据ui尺寸适配。默认一倍图 375
   * @returns number
   */
  static setPx2dp(uiEleWidth: number, defaultWidth?: number) {
    const width = Dimensions.get('window').width;
    if (!defaultWidth) {
      return (uiEleWidth * width) / 375;
    } else {
      return (uiEleWidth * width) / defaultWidth;
    }
  }
}

export { Px2dpTools };
