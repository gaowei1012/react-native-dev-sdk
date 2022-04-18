/*
 * @Author: mingwei
 * @Date: 2022-04-16 16:44:55
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-18 17:47:46
 * @FilePath: /react-native-dev-sdk/src/tools/back/style/index.ts
 * @Description:
 */
import { StyleSheet } from 'react-native';
import { Px2dpTools } from '../..';

const { px2dp } = Px2dpTools;

export const backStyle = StyleSheet.create({
  back: {
    width: px2dp(18),
    height: px2dp(18),
  },
});
