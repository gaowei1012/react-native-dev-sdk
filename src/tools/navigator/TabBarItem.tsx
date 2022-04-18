/*
 * @Author: mingwei
 * @Date: 2022-04-18 14:53:58
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-18 14:55:16
 * @FilePath: /react-native-dev-sdk/src/tools/navigator/TabBarItem.tsx
 * @Description:
 */
import React from 'react';
import { Image } from 'react-native';

type tabBarItemType = {
  tintColor?: string;
  selectIcon?: string;
  normalIcon?: string;
  focused?: boolean;
};

const TabBarItem: React.FC<tabBarItemType> = props => {
  const imgUrl: any = props.focused ? props.selectIcon : props.normalIcon;
  return (
    <Image
      resizeMode="contain"
      style={{ tintColor: props.tintColor, width: 25, height: 25 }}
      source={imgUrl}
    />
  );
};

export { TabBarItem };
