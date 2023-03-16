import React, { useRef } from 'react';
import { View, PanResponder, Image } from 'react-native';

const ColorView: React.FC<{}> = () => {
  const viewRef = useRef(null);

  const renderColorView = () => (
    <View
      {...PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => true,
        onStartShouldSetPanResponderCapture: (e, gestureState) => true,
        onMoveShouldSetPanResponder: (e, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (e, gestureState) => true,
        onPanResponderGrant: (evt, gestureState) => {
          // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
          // gestureState.{x,y} 现在会被设置为0
        },
        onPanResponderMove: (evt, gestureState) => {
          // 最近一次的移动距离为gestureState.move{X,Y}
          // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, gestureState) => {
          // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
          // 一般来说这意味着一个手势操作已经成功完成。
        },
        onPanResponderTerminate: (evt, gestureState) => {
          // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
        },
        onShouldBlockNativeResponder: (evt, gestureState) => {
          // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
          // 默认返回true。目前暂时只支持android。
          return true;
        },
      }).panHandlers}
      style={{
        position: 'absolute',
        backgroundColor: '#fff',
      }}></View>
  );

  const onLayout = (nativeEvent: any) => {};

  return (
    <View ref={viewRef} onLayout={nativeEvent => onLayout(nativeEvent)}>
      <View>{renderColorView()}</View>
    </View>
  );
};

export default ColorView;
