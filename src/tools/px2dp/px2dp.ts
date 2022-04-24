/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:44:16
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 22:16:31
 * @FilePath: /react-native-dev-sdk/src/tools/px2dp/px2dp.ts
 * @Description:
 */

import { Dimensions } from 'react-native';

export const width: number = Dimensions.get('window').width;

export const height: number = Dimensions.get('window').height;

export const px2dp = (uiEleWidth: number) => {
  const width = Dimensions.get('window').width;
  return (uiEleWidth * width) / 375;
};
