import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './style';

interface LoadingProps {
  loadingDisplay: any | 'none';
  size?: number | 'small' | 'large';
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
