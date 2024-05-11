# react-native-dev-sdk

react-native-dev-sdk

> 封装大部业务中常用组件，方法、方便项目中适用

安装依赖使用，安装需要将 dev 嵌入项目.

```
  npm i @react-native-async-storage/async-storage @react-navigation/native axios react-native-root-toast @react-navigation/native-stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-safe-area-context react-native-screens validator react-native-svg axios --save
```

在项目 ios 目录下，执行 pod isntall

```tsx
cd ios && pod install
```

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

> axios封装

```ts
import { get } from 'react-native-sdk-dev';

// 发送get请求
const request = async = (url) => {
  await get(url)
}

// 发送post请求
const postRes = async = (url, data) => {
  await post(url, data)
}

// 编辑资料
const putRes = async (url, data) => {
  await post(url, data)
}

// 删除资料
const delRes = async (url) => {
  await del(url)
}

```

## TODO

- [] 友盟双端埋点，统计PV，用户方法数
- [] 错误监控收集器
