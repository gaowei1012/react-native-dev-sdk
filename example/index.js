/*
 * @Author: mingwei
 * @Date: 2022-04-05 08:31:41
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-05 08:41:44
 * @FilePath: /react-native-dev-sdk/example/index.js
 * @Description:
 */
/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
