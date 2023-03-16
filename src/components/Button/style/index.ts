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
