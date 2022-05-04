/*
 * @Author: mingwei
 * @Date: 2022-05-04 15:12:41
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-04 15:13:48
 * @FilePath: /react-native-dev-sdk/src/components/TabBarItem/style/index.ts
 * @Description:
 */

import { StyleSheet } from 'react-native';
import { px2dp } from '../../../tools';

const TabBarItemStyle = StyleSheet.create({
  container: {
    width: px2dp(25),
    height: px2dp(25),
  },
});

export { TabBarItemStyle };
