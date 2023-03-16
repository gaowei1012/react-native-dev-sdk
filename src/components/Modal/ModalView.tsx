import React from 'react';
import { Animated } from 'react-native';
import { ViewStyle, StyleProp } from 'react-native';

interface ModalViewsProps {
  propStyle?: StyleProp<ViewStyle>;
}

const ModalViews: React.FC<ModalViewsProps> = props => {
  const { propStyle } = props;
  return (
    <Animated.View style={[propStyle]}>
      <Animated.Text>hello</Animated.Text>
    </Animated.View>
  );
};

export default ModalViews;
