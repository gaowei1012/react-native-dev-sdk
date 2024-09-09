import { memo } from 'react';
import type { FC } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './style';

type ILoadingProps = {
  loadingDisplay: any | 'none';
  size?: number | 'small' | 'large';
};

const Loading: FC<ILoadingProps> = ({ size, loadingDisplay }) => {
  return (
    <View style={[styles.loding_mask, { display: loadingDisplay }]}>
      <ActivityIndicator size={size} color="#fff" />
    </View>
  );
};

export default memo(Loading, () => {
  return false;
});
