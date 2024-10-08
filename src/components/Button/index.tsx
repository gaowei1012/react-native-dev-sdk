import { memo } from 'react';
import type { FC, ReactElement } from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text } from 'react-native';
import { buttonStyle } from './style';
import { Utils } from '../../tools';

type IbuttonType = {
  text: string | ReactElement;
  onPress?: () => void;
  buttonPropsStyle?: any;
  type?: string | 'default';
};

const buttonOptions = {
  default: 'default',
};

const Button: FC<IbuttonType> = ({ text, onPress, buttonPropsStyle, type }) => {
  const theme = type == 'default' ? buttonOptions[type] : '';

  const renderIosButton = () => (
    <TouchableOpacity style={[buttonStyle.wrap, buttonStyle[theme], buttonPropsStyle]} onPress={onPress} activeOpacity={0.8}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );

  const renderAndroidButton = () => (
    <View style={[buttonStyle.wrap, buttonStyle[theme], buttonPropsStyle]}>
      <TouchableNativeFeedback onPress={onPress}>
        <Text>{text}</Text>
      </TouchableNativeFeedback>
    </View>
  );

  return <>{Utils.platform() ? renderIosButton() : renderAndroidButton()}</>;
};

export default memo(Button, () => {
  return false;
});
