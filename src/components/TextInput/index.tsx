import React from 'react';
import { TextInput } from 'react-native';
import { TextInputProps } from 'react-native';

interface DevSdkTextInputProps extends TextInputProps {}

const DevSdkTextInput: React.FC<DevSdkTextInputProps> = props => {
  return <TextInput {...props} />;
};

export default DevSdkTextInput;
