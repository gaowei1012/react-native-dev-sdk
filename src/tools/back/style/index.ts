/*
 * @Author: mingwei
 * @Date: 2022-04-16 16:44:55
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-17 17:51:31
 * @FilePath: /react-native-dev-sdk/src/tools/back/style/index.ts
 * @Description:
 */
import { StyleSheet } from 'react-native';
import { Px2dpTools } from '../..';

const { setPx2dp } = Px2dpTools;

export const backStyle = StyleSheet.create({
  back: {
    width: setPx2dp(18),
    height: setPx2dp(18),
  },
});
