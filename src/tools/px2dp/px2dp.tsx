/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:44:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-19 09:22:22
 * @FilePath: /react-native-dev-sdk/src/tools/px2dp/px2dp.ts
 * @Description:
 */

import { Dimensions } from 'react-native';

export const width = (): number => {
  return Dimensions.get('window').width;
};

export const height = (): number => {
  return Dimensions.get('window').height;
};

export const px2dp = (uiEleWidth: number): number => {
  const width = Dimensions.get('window').width;
  return (uiEleWidth * width) / 375;
};
