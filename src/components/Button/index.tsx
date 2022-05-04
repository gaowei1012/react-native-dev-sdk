/*
 * @Author: mingwei
 * @Date: 2022-05-04 17:35:25
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-04 17:36:26
 * @FilePath: /react-native-dev-sdk/src/components/Button/index.tsx
 * @Description:
 */
import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform, View, Text } from 'react-native';
import { buttonStyle } from './style';

type buttonType = {
  text: string | React.ReactElement;
  onPress?: () => void;
  buttonPropsStyle?: any;
  type?: string | 'default';
};

const Button: React.FC<buttonType> = ({ text, onPress, buttonPropsStyle, type }) => {
  const platform = Platform.OS == 'ios' ? true : false;

  const theme = type == 'default' ? buttonStyle.default : '';

  const renderIosButton = () => (
    <TouchableOpacity
      style={[buttonStyle.wrap, theme, buttonPropsStyle]}
      onPress={onPress}
      activeOpacity={1}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );

  const renderAndroidButton = () => (
    <View style={[buttonStyle.wrap, buttonPropsStyle]}>
      <TouchableNativeFeedback onPress={onPress}>
        <Text>{text}</Text>
      </TouchableNativeFeedback>
    </View>
  );

  return <>{platform ? renderIosButton() : renderAndroidButton()}</>;
};

export default Button;
