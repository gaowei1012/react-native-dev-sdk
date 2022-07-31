import { StyleSheet } from 'react-native';
import { px2dp } from '../../../tools';

export const searchStyle = StyleSheet.create({
  search_wrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search_left_wrap: {
    flexDirection: 'row',
    width: '80%',
    borderRadius: px2dp(20),
    paddingVertical: px2dp(8),
  },
  search_content_wrap: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search_icon: {
    marginHorizontal: px2dp(6),
    width: px2dp(20),
    height: px2dp(20),
  },
  search_textinput: {
    paddingLeft: px2dp(30),
  },
  search_onpress_text: {
    paddingHorizontal: px2dp(14),
  },
});
