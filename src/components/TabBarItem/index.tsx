/*
 * @Author: mingwei
 * @Date: 2022-05-04 15:11:08
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-04 15:15:13
 * @FilePath: /react-native-dev-sdk/src/components/TabBarItem/index.tsx
 * @Description:
 */

import React from 'react';
import { Image } from 'react-native';
import { TabBarItemStyle } from './style';

export type ITabBarItemType = {
  tintColor?: string;
  selectIcon?: string;
  normalIcon?: string;
  focused?: boolean;
};

const TabBarItem: React.FC<ITabBarItemType> = props => {
  const imgUrl: any = props.focused ? props.selectIcon : props.normalIcon;
  return (
    <Image
      resizeMode="contain"
      style={[TabBarItemStyle.container, { tintColor: props.tintColor }]}
      source={imgUrl}
    />
  );
};

export default TabBarItem;
