import { memo } from 'react';
import type { FC } from 'react';
import { styles } from './style/index';
import { View, Text, StatusBar } from 'react-native';

const TopNavigator: FC<ITopNavigator.topNavigationBarProps> = ({ style, statusBar, rightButton, titleLayoutStyle, leftButton, hide, titleView, fontSize, title }) => {
  const getButtonElement = (ele: any) => <View style={styles.navBarButton}>{ele ? ele : null}</View>;

  return (
    <View style={[styles.container, style]}>
      {!statusBar?.hiddle ? (
        <View style={styles.statusBar}>
          <StatusBar {...statusBar} />
        </View>
      ) : null}
      {!hide ? (
        <View style={styles.navBar}>
          <View style={styles.leftBtnBox}>{leftButton}</View>
          <View style={[styles.navBarTitleContainer, titleLayoutStyle]}>
            {titleView ? (
              <>{titleView}</>
            ) : (
              <Text numberOfLines={1} style={[styles.title, { fontSize, color: '#111' }]}>
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

export default memo(TopNavigator, () => {
  return false;
});
