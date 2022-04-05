/*
 * @Author: mingwei
 * @Date: 2022-04-05 09:26:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-05 20:41:26
 * @FilePath: /react-native-dev-sdk/components/Modal/ModelView.tsx
 * @Description:
 */

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
