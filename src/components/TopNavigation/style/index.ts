import { StyleSheet, Platform } from 'react-native';
import { px2dp, width } from '../../../tools';

const NAV_BAR_H_IOS = 40;
const NAV_BAR_H_ANDROID = 50;

// const status_bar_h = Platform.OS === 'ios' ? 20 : null;
const nav_bar_h = Platform.OS === 'ios' ? NAV_BAR_H_IOS : NAV_BAR_H_ANDROID;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: nav_bar_h, // 根据平台设置高度
    // paddingHorizontal: px2dp(15),
    width,
  },
  navBarTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navBarButton: {
    alignItems: 'center',
    // justifyContent: 'center',
    // width: px2dp(30),
    // height: px2dp(40),
  },
  container: {
    // backgroundColor: '#85DFD2', // 设置背景颜色
  },
  title: {
    width: px2dp(200),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  leftIcon: {
    width: px2dp(22),
    height: px2dp(22),
  },
  statusBar: {
    // height: status_bar_h ? status_bar_h : '',
  },
  leftBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: px2dp(50),
    paddingLeft: px2dp(6),
    // height: NAV_BAR_H, // 根据平台设置高度
  },
  rightBtnBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: px2dp(50),
  },
});

export { styles };
