/*
 * @Author: mingwei
 * @Date: 2022-06-28 09:13:29
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-28 09:13:31
 * @FilePath: /react-native-dev-sdk/src/components/Dialog/style/index.ts
 * @Description:
 */
import { px2dp, width, height } from '../../../tools';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dialogWrap: {
    flex: 1,
    width,
    height,
    backgroundColor: 'rgba(34, 34, 46, 0.39)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogContent: {
    width: px2dp(320),
    alignItems: 'center',
    height: px2dp(220),
    backgroundColor: '#fff',
    borderRadius: px2dp(6),
    overflow: 'hidden',
  },
  dialogButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: px2dp(46),
    flexDirection: 'row',
    borderTopColor: '#ddd',
    borderTopWidth: 0.5,
    justifyContent: 'space-between',
  },
  dialogBtnWrap: {
    width: '50%',
    borderRightColor: '#ddd',
    borderRightWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  children: {
    paddingTop: px2dp(22),
    alignItems: 'center',
  },
  actionText: {
    color: '#3A84D9',
  },
  btnText: {
    fontSize: px2dp(15),
  },
  title: {
    fontSize: px2dp(18),
  },
  content: {
    padding: px2dp(12),
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contentLine: {
    lineHeight: px2dp(26),
    // fontWeight: '500',
    fontSize: px2dp(15),
  },
});

export { styles };
