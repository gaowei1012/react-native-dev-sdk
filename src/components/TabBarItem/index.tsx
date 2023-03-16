import React from 'react';
import { Image } from 'react-native';
import { TabBarItemStyle } from './style';

export type ITabBarItemType = {
  tintColor?: string;
  selectIcon?: string;
  normalIcon?: string;
  focused?: boolean;
  customize?: any;
};

const TabBarItem: React.FC<ITabBarItemType> = props => {
  const imgUrl: any = props.focused ? props.selectIcon : props.normalIcon;
  return <Image resizeMode="contain" style={[TabBarItemStyle.container, { tintColor: props.tintColor }, props.customize]} source={imgUrl} />;
};

export default TabBarItem;
