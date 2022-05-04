/*
 * @Author: mingwei
 * @Date: 2022-04-29 17:15:38
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-04 17:26:10
 * @FilePath: /react-native-dev-sdk/src/components/topNavigationBar/style/index.ts
 * @Description:
 */
import { StyleSheet, Platform } from 'react-native';
import { px2dp } from '../../../tools';

const NAV_BAR_H_IOS = 44;
const NAV_BAR_H_ANDROID = 50;

export const status_bar_h = Platform.OS === 'ios' ? 20 : null;
export const nav_bar_h = Platform.OS === 'ios' ? NAV_BAR_H_IOS : NAV_BAR_H_ANDROID;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: nav_bar_h, // 根据平台设置高度
    paddingHorizontal: px2dp(15),
  },
  navBarTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBarButton: {
    alignItems: 'center',
  },
  container: {
    // backgroundColor: '#fff', // 设置背景颜色
  },
  title: {
    width: px2dp(200),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statusBar: {
    // height: status_bar_h ? status_bar_h : '',
  },
  leftBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: px2dp(50),
    height: nav_bar_h, // 根据平台设置高度
  },
  rightBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: px2dp(60),
    height: nav_bar_h, // 根据平台设置高度
  },
});

export { styles };
