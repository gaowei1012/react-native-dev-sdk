/*
 * @Author: mingwei
 * @Date: 2022-04-19 07:45:06
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-21 09:16:08
 * @FilePath: /react-native-dev-sdk/src/tools/navigator/RootNavigatorBottom.tsx
 * @Description:
 */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarItem } from './TabBarItem';

const tabsdata: TabsType[] = [
  {
    route: 'homepage',
    normalIcon: '',
    selectIcon: '',
    components: <></>,
    title: '首页',
  },
  {
    route: 'profilepage',
    normalIcon: '',
    selectIcon: '',
    components: <></>,
    title: '设置',
  },
];

type TabsType = {
  title: string;
  route: string;
  normalIcon: any;
  selectIcon: any;
  components: any;
};

const Tab = createBottomTabNavigator();

const RootNavigatorBottom: React.FC<{ tabs: TabsType[] }> = props => {
  const { tabs } = props;
  return (
    <>
      {tabs.map(r => (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              if (route.name == r['route']) {
                return (
                  <TabBarItem
                    focused={focused}
                    normalIcon={r.normalIcon}
                    selectIcon={r.selectIcon}
                  />
                );
              }
            },
          })}>
          <Tab.Screen name={r.route} component={r.components} options={{ tabBarLabel: r.title }} />
        </Tab.Navigator>
      ))}
    </>
  );
};

export { RootNavigatorBottom };
