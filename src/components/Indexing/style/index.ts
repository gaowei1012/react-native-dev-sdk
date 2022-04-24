/*
 * @Author: mingwei
 * @Date: 2022-04-21 16:44:04
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 10:47:10
 * @FilePath: /react-native-dev-sdk/src/components/Indexing/style/index.ts
 * @Description:
 */

import { px2dp, height, width } from '../../../tools';
import { StyleSheet } from 'react-native';

const IndexingViewStyle = StyleSheet.create({
  treeWrap: {
    flex: 1,
    width: width(),
    height: height(),
    backgroundColor: 'rgba(34, 34, 46, 0.39)',
  },
  treeContent: {
    position: 'absolute',
    bottom: 0,
    width: width(),
    height: px2dp(608),
    backgroundColor: '#fff',
    borderTopLeftRadius: px2dp(6),
    borderTopRightRadius: px2dp(6),
  },
  treeTopWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: px2dp(24),
  },
  cancelText: {
    color: '#A8A9AA',
    fontSize: px2dp(16),
    lineHeight: px2dp(22),
  },
  titleText: {
    color: '#06121E',
    fontSize: px2dp(18),
    lineHeight: px2dp(22),
    fontWeight: 'bold',
  },
  affirmText: {
    color: '#A8A9AA',
    fontSize: px2dp(16),
    lineHeight: px2dp(22),
  },
  affirmTextAction: {
    color: '#3A84D9',
  },
  treeNodeWrap: {
    marginLeft: px2dp(25),
    flex: 1,
  },
  treeContentWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flatlistWrap: {
    width: width(),
    height: px2dp(508),
  },
  sideBoxWrap: {
    position: 'absolute',
    right: px2dp(6),
    backgroundColor: 'rgba(211, 211, 211, 0.4)',
    width: px2dp(20),
    borderRadius: 15,
    alignItems: 'center',
    paddingVertical: px2dp(8),
    alignSelf: 'center',
  },
  scrollContentWrap: {
    height: px2dp(508),
    justifyContent: 'center',
  },
  treeNode: {
    paddingHorizontal: px2dp(20),
    paddingVertical: px2dp(10),
  },
  treeContentTopWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: px2dp(20),
    height: px2dp(30),
    lineHeight: px2dp(30),
    marginBottom: px2dp(18),
    flexWrap: 'wrap',
  },
  treeContentTopText: {
    height: px2dp(20),
    lineHeight: px2dp(20),
    fontSize: px2dp(14),
  },
  treeContentTopTextAction: {
    color: 'red',
    fontSize: px2dp(14),
  },
  selectNodeTitle: {
    flexWrap: 'wrap',
    paddingRight: px2dp(10),
  },
  itemHead: {
    paddingVertical: px2dp(10),
    // borderBottomColor: 'rgba(211, 211, 211, 0.3)',
    // borderBottomWidth: px2dp(1),
    paddingHorizontal: px2dp(16),
  },
  itemContent: {
    paddingHorizontal: px2dp(16),
    paddingTop: px2dp(10),
  },
  pSelectText: {
    fontSize: px2dp(14),
  },
});

export { IndexingViewStyle };
