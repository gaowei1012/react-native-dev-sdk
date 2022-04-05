/*
 * @Author: mingwei
 * @Date: 2022-04-05 08:53:27
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-05 20:40:00
 * @FilePath: /react-native-dev-sdk/components/Modal/index.tsx
 * @Description:
 */

import React from 'react';
import { Modal } from 'react-native';
import { ModalProps, ViewStyle, StyleProp } from 'react-native';
import ModalViews from './ModelView';

interface DevSdkModalProps extends ModalProps {
  modelStyle?: StyleProp<ViewStyle>;
}

const DevSdkModal: React.FC<DevSdkModalProps> = props => {
  return (
    <Modal {...props}>
      <ModalViews propStyle={[props.modelStyle]} />
    </Modal>
  );
};

export default DevSdkModal;
