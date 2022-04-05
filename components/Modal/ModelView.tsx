/*
 * @Author: mingwei
 * @Date: 2022-04-05 09:26:56
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-05 10:59:13
 * @FilePath: /react-native-dev-sdk/components/Modal/ModelView.tsx
 * @Description:
 */

import React from 'react';
import { Animated } from 'react-native';

interface ModalViewsProps {
  propStyle: object;
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
