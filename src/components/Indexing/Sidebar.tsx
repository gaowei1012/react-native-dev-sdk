import React, { useState } from 'react';
import { View, Text, PanResponder, GestureResponderEvent, PanResponderGestureState } from 'react-native';
import { Utils } from '../../tools';
import _ from 'lodash';

const SideBar: React.FC<{ onSelectPress: any; sideData: any[] }> = ({ onSelectPress, sideData }) => {
  const [moveDownY, setMoveDownY] = useState(0);
  const [moveDownKey, setMoveDownKey] = useState('');
  const [moveState, setMoveState] = useState(false);

  const handlerSeekGrant = (evt: GestureResponderEvent, gestureState: PanResponderGestureState, item: any, index: React.Key | null | undefined) => {
    evt.persist(); // 需要加这个函数,来仿制进行复用函数
    setMoveDownY(evt.nativeEvent.pageY);
    setMoveDownKey(item);
  };

  const handlerSeekMove = (evt: GestureResponderEvent, gestureState: PanResponderGestureState, item: any, index: React.Key | null | undefined) => {
    evt.persist(); // 需要加这个函数,来仿制进行复用函数
    setMoveState(true);
    let moveY = evt.nativeEvent.pageY;
    let diff = moveY - moveDownY;
    let diffKey = diff / 36; // 注意高度一定要获取整数,否则在计算的时候,计算误差
    let keyIndex = Utils.getEN().indexOf(moveDownKey);
    let endIndex = keyIndex + diffKey;
    let keyValue = Utils.getEN()[endIndex];
    if (keyValue) {
      //滑动进行索引
      onSelectPress(keyValue);
    }
  };

  const handlerSeekRelease = (evt: GestureResponderEvent, gestureState: PanResponderGestureState, item: any, index: React.Key | null | undefined) => {
    evt.persist();
    if (!moveState) {
      onSelectPress(item);
    }
    setMoveState(false);
  };

  const renderSideEle = () => {
    const _side: string[] = [];
    _.map(sideData, side => {
      _side.push(side.substr(0, 1));
    });
    // console.log('_.orderBy(_.uniqWith(_side))', _.orderBy(_.uniqWith(_side)));
    return (
      <>
        {_.orderBy(_.uniqWith(_side)).map((item: any, index: React.Key | null | undefined) => {
          return (
            <View
              key={index?.toString()}
              {...PanResponder.create({
                onStartShouldSetPanResponder: (evt, gestureState) => true,
                onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
                onMoveShouldSetPanResponder: (evt, gestureState) => true,
                onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
                onPanResponderGrant: (evt, gestureState) => {
                  // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                  handlerSeekGrant(evt, gestureState, item, index);
                },
                onPanResponderMove: (evt, gestureState) => {
                  handlerSeekMove(evt, gestureState, item, index);
                },
                onPanResponderTerminationRequest: (evt, gestureState) => true,
                onPanResponderRelease: (evt, gestureState) => {
                  // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                  // 一般来说这意味着一个手势操作已经成功完成。
                  handlerSeekRelease(evt, gestureState, item, index);
                },
                onPanResponderTerminate: (evt, gestureState) => {
                  // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
                },
                onShouldBlockNativeResponder: (evt, gestureState) => {
                  // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                  // 默认返回true。目前暂时只支持android。
                  return true;
                },
              }).panHandlers}>
              <Text
                style={{
                  width: 120,
                  height: 20,
                  textAlign: 'center',
                  fontSize: 14,
                  color: '#666',
                  fontWeight: 'bold',
                }}>
                {item.substr(0, 1)}
              </Text>
            </View>
          );
        })}
      </>
    );
  };

  return <>{renderSideEle()}</>;
};

export { SideBar };
