/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:52:19
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-16 15:27:08
 * @FilePath: /react-native-dev-sdk/tools/toast.ts
 * @Description: Toast 轻提示
 */

import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import Toast from 'react-native-root-toast';

type ShowToastType = {
  msg: string;
  duration?: number | 3000;
  position?: string | 'centner' | 'bottom' | 'top';
  shadow?: boolean | true;
  animation?: boolean;
  onShow?: () => void;
  onHidden?: () => void;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor: string;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  delay?: number;
};

class RootToast {
  static toast: any;

  /**
   *
   * @param msg 提示内容
   * @param duration 页面存留时间，默认为3秒
   */
  static showToast(options: ShowToastType) {
    const {
      position,
      msg,
      duration,
      animation,
      shadow,
      backgroundColor,
      containerStyle,
      onHidden,
      onPress,
      onShow,
      delay,
    } = options;
    // 默认0为居中模式
    let _position: number = 0;
    switch (position) {
      case 'center':
        _position = Toast.positions.CENTER;
      case 'top':
        _position = Toast.positions.TOP;
      case 'bottom':
        _position = Toast.positions.BOTTOM;
    }

    // 显示Toast
    this.toast = Toast.show(msg, {
      containerStyle,
      backgroundColor,
      position: _position,
      duration,
      shadow,
      animation,
      delay,
      onShow,
      onHidden,
      onPress,
    });
  }
}

export { RootToast };
