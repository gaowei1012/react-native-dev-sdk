import React from 'react';
import { Modal } from 'react-native';
import { ModalProps, ViewStyle, StyleProp } from 'react-native';
import ModalViews from './ModalView';

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
