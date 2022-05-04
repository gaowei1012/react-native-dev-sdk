/*
 * @Author: mingwei
 * @Date: 2022-05-04 17:35:57
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-04 17:35:58
 * @FilePath: /react-native-dev-sdk/src/components/Button/style/index.ts
 * @Description:
 */
import { StyleSheet } from 'react-native';
import { px2dp } from '../../../tools';

export const buttonStyle = StyleSheet.create({
  wrap: {
    height: px2dp(32),
    borderRadius: px2dp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  default: {
    backgroundColor: '#ddd',
  },
});
