/*
 * @Author: mingwei
 * @Date: 2022-04-29 17:13:59
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-29 17:18:29
 * @FilePath: /react-native-dev-sdk/src/components/topNavigationBar/index.tsx
 * @Description:
 */

import React from 'react';
import { styles } from './style/index';
import { View, Text, StatusBar } from 'react-native';

type StatusBarShapeType = {
  barStyle?: any | 'light-content' | 'default';
  hiddle?: boolean;
  backgroundColor?: string;
};

interface topNavigationBarType {
  style?: any;
  title?: string;
  titleView?: React.ReactElement;
  titleLayoutStyle?: any;
  statusBar?: StatusBarShapeType;
  rightButton?: React.ReactElement;
  leftButton?: React.ReactElement;
  translucent?: boolean;
  color?: string;
  fontSize?: number;
  animated?: boolean;
  hide?: boolean;
}

const TopNavigationBar: React.FC<topNavigationBarType> = props => {
  const {
    style,
    statusBar,
    rightButton,
    titleLayoutStyle,
    leftButton,
    hide,
    titleView,
    color,
    fontSize,
    title,
  } = props;
  const getButtonElement = (ele: any) => {
    return <View style={styles.navBarButton}>{ele ? ele : null}</View>;
  };
  return (
    <View style={[styles.container, style]}>
      {!statusBar?.hiddle ? (
        <View style={styles.statusBar}>
          <StatusBar {...statusBar} />
        </View>
      ) : null}
      {!hide ? (
        <View style={styles.navBar}>
          <View style={styles.leftBtnBox}>{getButtonElement(leftButton)}</View>
          <View style={[styles.navBarTitleContainer, titleLayoutStyle]}>
            {titleView ? (
              <>{titleView}</>
            ) : (
              <Text numberOfLines={1} style={[styles.title, { color, fontSize }]}>
                {title}
              </Text>
            )}
          </View>
          <View style={styles.rightBtnBox}>{getButtonElement(rightButton)}</View>
        </View>
      ) : null}
    </View>
  );
};

export default TopNavigationBar;
