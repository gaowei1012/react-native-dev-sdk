<!--
 * @Author: mingwei
 * @Date: 2022-04-04 23:31:26
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-30 15:42:57
 * @FilePath: /react-native-dev-sdk/README.md
 * @Description:
-->

# react-native-dev-sdk

react-native-dev-sdk

> 封装大部业务中常用组件，方法、方便项目中适用

安装依赖使用，安装需要将 dev 嵌入项目

```
  npm i @react-native-async-storage/async-storage @react-navigation/native axios react-native-root-toast @react-navigation/native-stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-safe-area-context react-native-screens validator react-native-svg --save
```

在项目 ios 目录下，执行 pod isntall

> 使用

```tsx
// px2dp
import { Toast, px2dp } from 'react-native-dev-sdk';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: px2dp(30),
    height: px2dp(30),
  },
});

return (
  <View style={styles.container}>
    <Text>hello app</Text>
    <Toast />
  </View>
);
```

> Storage

```tsx
import { StorageTools } from 'react-native-dev-sdk';

// 设置缓存
await StorageTools.setStorage('storage', 'hello');

// 获取缓存
await StorageTools.getStorage('storage');
```

> Toast

```tsx
import { RootToast } from 'react-native-dev-sdk';

// 显示toast
RootToast.showToast(optoins);

// options
options = {
  position,
  msg,
  duration,
  animation,
  shadow,
  backgroundColor,
  containerStyle,
  onHidden,
  onPress,
  onShow,
  delay,
};
```

> DynamicTabNavigate.tsx 底部导航

```tsx
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigatorUtils } from 'react-native-sdk';
import * as React from 'react';

import { RootNavigatorBottom } from './RootNavigatorBottom';
import { Login, Register } from '@/pages/user';
import NotesPage from '@/pages/notes';

const Stack = createNativeStackNavigator();

export default function DynamicTabNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigatorRef => NavigatorUtils.initNavihator(navigatorRef)}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
           <!-- 这里要配置基本路由 -->
          <Stack.Screen name="root" component={RootNavigatorBottom} />
          <Stack.Screen name="notes" component={NotesPage} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
```

> RootNavigatorBottom.tsx

```tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProfileScreen } from './screen';
import { TabBarItem } from 'react-native-sdk';

const Tab = createBottomTabNavigator();

const RootNavigatorBottom: React.FC<{}> = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'home') {
            return (
              <TabBarItem
                focused={focused}
                normalIcon={require('../assets/tab/home.png')}
                selectIcon={require('../assets/tab/ac_home.png')}
              />
            );
          } else if (route.name === 'profile') {
            return (
              <TabBarItem
                focused={focused}
                normalIcon={require('../assets/tab/dynamic.png')}
                selectIcon={require('../assets/tab/ac_dynamic.png')}
              />
            );
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="home" component={HomeScreen} options={{ tabBarLabel: 'notes' }} />
      <Tab.Screen name="profile" component={ProfileScreen} options={{ tabBarLabel: 'profile' }} />
    </Tab.Navigator>
  );
};

export { RootNavigatorBottom };
```

更新中
