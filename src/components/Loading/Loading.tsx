/*
 * @Author: mingwei
 * @Date: 2022-04-24 22:36:22
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 23:01:07
 * @FilePath: /react-native-dev-sdk/src/components/Loading/Loading.tsx
 * @Description:
 */

import React from 'react';
import { View, ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import styles from './style';

interface LoadingProps extends ActivityIndicatorProps {
  loadingDisplay: any | 'none';
}

const Loading: React.FC<LoadingProps> = props => {
  const { size, loadingDisplay } = props;
  return (
    <View style={[styles.loding_mask, { display: loadingDisplay }]}>
      <ActivityIndicator size={size} color="#fff" />
    </View>
  );
};

export { Loading };
