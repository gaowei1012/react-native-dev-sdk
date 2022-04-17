/*
 * @Author: mingwei
 * @Date: 2022-04-16 16:44:55
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-17 21:50:49
 * @FilePath: /react-native-dev-sdk/src/tools/back/style/index.ts
 * @Description:
 */
import { StyleSheet } from 'react-native';
import { Px2dpTools } from '../..';

const { setPixel } = Px2dpTools;

export const backStyle = StyleSheet.create({
  back: {
    width: setPixel(18),
    height: setPixel(18),
  },
});
