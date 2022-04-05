/*
 * @Author: mingwei
 * @Date: 2022-04-05 08:53:27
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-05 08:57:30
 * @FilePath: /react-native-dev-sdk/components/Modal/index.tsx
 * @Description:
 */

import React from 'react';
import { View, Modal } from 'react-native';
import { ModalProps } from 'react-native';
import style from './style';

interface DevSdkModalProps extends ModalProps {}

const DevSdkModal: React.FC<DevSdkModalProps> = props => {
  return (
    <Modal {...props}>
      <View></View>
    </Modal>
  );
};

export default DevSdkModal;
