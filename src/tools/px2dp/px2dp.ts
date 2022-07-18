import { Dimensions } from 'react-native';

export const width: number = Dimensions.get('window').width;

export const height: number = Dimensions.get('window').height;

export const px2dp = (uiEleWidth: number) => {
  const width = Dimensions.get('window').width;
  return (uiEleWidth * width) / 375;
};
