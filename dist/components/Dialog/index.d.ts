import React from 'react';
import { ModalProps } from 'react-native';
declare const Dialog: React.FC<{
    cancel: () => void;
    confirm: () => void;
    children?: React.ReactNode | undefined;
} & ModalProps>;
export default Dialog;
