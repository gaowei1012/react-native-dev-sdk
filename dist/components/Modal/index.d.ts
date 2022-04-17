import React from 'react';
import { ModalProps, ViewStyle, StyleProp } from 'react-native';
interface DevSdkModalProps extends ModalProps {
    modelStyle?: StyleProp<ViewStyle>;
}
declare const DevSdkModal: React.FC<DevSdkModalProps>;
export default DevSdkModal;
