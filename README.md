<!--
 * @Author: mingwei
 * @Date: 2022-04-04 23:31:26
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-26 17:03:25
 * @FilePath: /react-native-dev-sdk/README.md
 * @Description:
-->

# react-native-dev-sdk

react-native-dev-sdk

> 封装大部业务中常用组件，方法、方便项目中适用

安装依赖使用，安装需要将 dev 嵌入项目

```
  npm i @react-native-async-storage/async-storage @react-navigation/native axios react-native-root-toast @react-navigation/native-stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-safe-area-context react-native-screens validator --save
```

在项目 ios 目录下，执行 pod isntall

> 使用

```tsx
// px2dp
import { Toast, Px2dpTools } from 'react-native-dev-sdk';
const { px2dp } = Px2dpTools;

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

> navigator 底部导航

```tsx
import { DynamicTabNavigator, RootNavigatorBottom } from 'react-native-dev-sdk';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// 导航栏数据
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

const RootNavigatorBottomOptions = <RootNavigatorBottom tabs={tabsdata} />;

class HomeScreen {
  static renderAppStack() {
    <Stack.Group>
      <Stack.Screen name="news" component={<>news</>} />
    </Stack.Group>;
  }
}

const renderAppStack = () => {
  return <>{HomeScreen.renderAppStack()}</>;
};

<View>
  <DynamicTabNavigator
    RootNavigatorBottom={RootNavigatorBottomOptions}
    children={renderAppStack()}
  />
</View>;
```
