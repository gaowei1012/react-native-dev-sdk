import React, { useState } from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  RefreshControlProps,
} from 'react-native';
import { px2dp, Utils } from '../../tools';

interface PaginationProps extends RefreshControlProps {
  children: React.ReactElement;
  loadFunctionMore: any;
  requestFunctionData: any;
}

const Pagination: React.FC<PaginationProps> = ({
  loadFunctionMore,
  requestFunctionData,
  tintColor,
  title,
  titleColor,
  colors,
  progressBackgroundColor,
}) => {
  const [refreshBottom, setRefreshBottom] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onMomentumScrollEnd = (event: {
    nativeEvent: {
      contentSize: { height: any };
      layoutMeasurement: { height: any };
      contentOffset: { y: any };
    };
  }) => {
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
    const scrollOffset = event.nativeEvent.contentOffset.y;

    const isEndReached = scrollOffset + scrollViewHeight + 45 >= contentHeight; // 是否滑动到底部
    const isContentFillPage = contentHeight >= scrollViewHeight; // 内容高度是否大于列表高度

    if (isContentFillPage && isEndReached) {
      setRefreshBottom(true);
      loadFunctionMore();
      setTimeout(() => {
        setRefreshBottom(false);
      }, 800);
    }
  };

  const renderRactivityIndicator = () => (
    <>
      {Utils.platform() ? (
        <View
          style={{
            position: 'absolute',
            bottom: px2dp(-50),
            width: '100%',
          }}>
          <ActivityIndicator animating={true} size="large" />
        </View>
      ) : (
        <ActivityIndicator animating={true} size="large" />
      )}
    </>
  );

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      requestFunctionData();
      setRefreshing(true);
    }, 1000);
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      onScrollEndDrag={onMomentumScrollEnd}
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          progressBackgroundColor={progressBackgroundColor}
          colors={colors}
          tintColor={tintColor}
          titleColor={titleColor}
          title={title}
        />
      }>
      {refreshBottom ? renderRactivityIndicator() : <></>}
    </ScrollView>
  );
};

export default Pagination;
