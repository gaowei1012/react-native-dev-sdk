/*
 * @Author: mingwei
 * @Date: 2022-04-05 08:53:27
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-05 10:59:30
 * @FilePath: /react-native-dev-sdk/components/Modal/index.tsx
 * @Description:
 */

import React from 'react';
import { Modal } from 'react-native';
import { ModalProps } from 'react-native';
import ModalViews from './ModelView';
import style from './style';

interface DevSdkModalProps extends ModalProps {
  modelStyle: any;
}

const DevSdkModal: React.FC<DevSdkModalProps> = props => {
  return (
    <Modal {...props}>
      <ModalViews propStyle={[props.modelStyle]} />
    </Modal>
  );
};

export default DevSdkModal;
