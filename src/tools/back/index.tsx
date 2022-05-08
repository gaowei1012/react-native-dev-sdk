/*
 * @Author: mingwei
 * @Date: 2022-04-16 16:37:08
 * @LastEditors: mingwei
 * @LastEditTime: 2022-05-08 12:37:35
 * @FilePath: /react-native-dev-sdk/src/tools/back/index.tsx
 * @Description:
 */
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { NavigatorUtils } from '../navigate';
import { backStyle } from './style';
import { GoBackProps } from '../../types';

const BackIcon = require('./assets/back.png');

const GoBack: React.FC<GoBackProps> = props => {
  let { action } = props;
  action = action ? action : () => NavigatorUtils.back();
  return (
    <TouchableOpacity activeOpacity={1} onPress={action}>
      <Image style={backStyle.back} source={BackIcon} />
    </TouchableOpacity>
  );
};

export default GoBack;
