import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigatorUtils } from '../navigate';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarItem } from './TabBarItem';
const { initNavihator } = NavigatorUtils;

type TabsType = {
  title: string;
  route: string;
  normalIcon: any;
  selectIcon: any;
  components: any;
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DynamicTabNavigator = (props: { children: any; tabs: TabsType[] }) => {
  const { children, tabs } = props;

  const RootNavigatorBottom = () => {
    return (
      <>
        {tabs.map(r => (
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                if (route.name == r['route']) {
                  return <TabBarItem focused={focused} normalIcon={r.normalIcon} selectIcon={r.selectIcon} />;
                }
              },
            })}>
            <Tab.Screen name={r.route} component={r.components} options={{ tabBarLabel: r.title }} />
          </Tab.Navigator>
        ))}
      </>
    );
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigatorRef => initNavihator(navigatorRef)}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="root" component={RootNavigatorBottom} />
          {children}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export { DynamicTabNavigator };
