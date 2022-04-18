<!--
 * @Author: mingwei
 * @Date: 2022-04-04 23:31:26
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-18 15:01:18
 * @FilePath: /react-native-dev-sdk/README.md
 * @Description:
-->

# react-native-dev-sdk

react-native-dev-sdk

> 封装大部业务中常用组件，方法、方便项目中适用

安装依赖使用，安装需要将 dev 嵌入项目

```
  npm i @react-native-async-storage/async-storage @react-navigation/native axios react-native-root-toast @react-navigation/native-stack @react-navigation/bottom-tabs react-native-gesture-handler react-native-safe-area-context --save
```

在项目 ios 目录下，执行 pod isntall

> 使用

```tsx
import { Toast, Px2dpTools } from 'react-native-dev-sdk';
const { setPx2dp } = Px2dpTools;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: setPx2dp(30),
    height: setPx2dp(30),
  },
});

return (
  <View style={styles.container}>
    <Text>hello app</Text>
    <Toast />
  </View>
);
```
