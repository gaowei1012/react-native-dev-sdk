/*
 * @Author: mingwei
 * @Date: 2022-04-16 16:44:55
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-18 17:43:43
 * @FilePath: /react-native-dev-sdk/src/tools/back/style/index.ts
 * @Description:
 */
import { StyleSheet } from 'react-native';
import { Px2dpTools } from '../..';

const { pixel } = Px2dpTools;

export const backStyle = StyleSheet.create({
  back: {
    width: pixel(18),
    height: pixel(18),
  },
});
