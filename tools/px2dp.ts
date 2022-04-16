/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:44:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-16 14:48:18
 * @FilePath: /react-native-dev-sdk/tools/px2dp.ts
 * @Description:
 */

import { Dimensions } from 'react-native';

// 这里定义设计稿尺寸，这里默认使用一倍图
const defaultWidth: number = 375;

const widtth: number = Dimensions.get('window').width;

const height: number = Dimensions.get('window').height;

// 计算屏幕像素大小
const px2dp = (uiEleWidth: number) => {
  return (uiEleWidth * widtth) / defaultWidth;
};

export { widtth, height, px2dp };
