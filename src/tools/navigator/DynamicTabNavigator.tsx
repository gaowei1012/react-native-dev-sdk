/*
 * @Author: mingwei
 * @Date: 2022-04-18 14:46:25
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-21 18:13:08
 * @FilePath: /react-native-dev-sdk/src/tools/navigator/DynamicTabNavigator.tsx
 * @Description:
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigatorUtils } from '../navigate';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNavigatorBottom } from './RootNavigatorBottom';
const { initNavihator } = NavigatorUtils;

const Stack = createNativeStackNavigator();

const DynamicTabNavigator = (props: { children: any }) => {
  const { children } = props;
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
