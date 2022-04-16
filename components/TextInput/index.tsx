/*
 * @Author: mingwei
 * @Date: 2022-04-05 08:47:18
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-16 21:35:26
 * @FilePath: /react-native-dev-sdk/components/TextInput/index.tsx
 * @Description:
 */

import React from 'react';
import { TextInput } from 'react-native';
import { TextInputProps } from 'react-native';

interface DevSdkTextInputProps extends TextInputProps {}

const DevSdkTextInput: React.FC<DevSdkTextInputProps> = props => {
  return <TextInput {...props} />;
};

export default DevSdkTextInput;
