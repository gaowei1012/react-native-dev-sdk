/*
 * @Author: mingwei
 * @Date: 2022-06-28 09:11:38
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-28 09:18:21
 * @FilePath: /react-native-dev-sdk/src/components/Dialog/index.tsx
 * @Description:
 */

import React from 'react';
import { Modal, ModalProps, View, TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

const Dialog: React.FC<
  { cancel: () => void; confirm: () => void; children?: React.ReactNode | undefined } & ModalProps
> = props => {
  const { visible, confirm, cancel, children } = props;
  const dialogBtnWrap = (text: string, bool: boolean) => (
    <TouchableOpacity
      onPress={() => {
        bool ? cancel() : confirm();
      }}
      activeOpacity={0.9}
      style={styles.dialogBtnWrap}>
      <Text style={[styles.btnText, !bool ? styles.actionText : null]}>{text}</Text>
    </TouchableOpacity>
  );
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={[styles.dialogWrap]}>
        <View style={styles.dialogContent}>
          <View style={styles.children}>{children}</View>
          <View style={styles.dialogButton}>
            {dialogBtnWrap('暂不使用', true)}
            {dialogBtnWrap('同意', false)}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Dialog;
