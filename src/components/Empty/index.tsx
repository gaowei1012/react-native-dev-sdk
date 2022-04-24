/*
 * @Author: mingwei
 * @Date: 2022-04-24 22:14:59
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 22:19:37
 * @FilePath: /react-native-dev-sdk/src/components/Empty/index.tsx
 * @Description:
 */

import React from 'react';
import { View, Image } from 'react-native';
import { width } from '../../tools';

const Empty: React.FC<{ height?: any }> = props => {
  const { height } = props;
  return (
    <View
      style={{
        width,
        height: '100%',
        alignItems: 'center',
      }}>
      <Image
        style={{
          height: height ? height : '100%',
        }}
        resizeMethod="auto"
        resizeMode="center"
        source={require('../../assets/icon/empty.png')}
      />
    </View>
  );
};

export default Empty;
