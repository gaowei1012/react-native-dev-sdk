import React, { memo } from 'react';
import { Animated } from 'react-native';
import { ViewStyle, StyleProp } from 'react-native';

type ModalViewsProps =  {
  propStyle?: StyleProp<ViewStyle>;
}

const ModalViews: React.FC<ModalViewsProps> = ({ propStyle }) => {
  return (
    <Animated.View style={[propStyle]}>
      <Animated.Text>hello</Animated.Text>
    </Animated.View>
  );
};

export default memo(ModalViews, () => {
  return false;
});
