/*
 * @Author: mingwei
 * @Date: 2022-04-21 16:42:37
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 10:47:17
 * @FilePath: /react-native-dev-sdk/src/components/Indexing/IndexingView.tsx
 * @Description:
 */

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { IndexingViewStyle } from './style';
import { SideBar } from './Sidebar';
import { Utils } from '../../tools';
import _ from 'lodash';

const IndexingView: React.FC<{ onCancel: any; onSave: any; treeData: any[] }> = props => {
  const { onCancel, onSave, treeData } = props;
  const [treeSele, setTreeSele] = useState<any[]>([]);
  const [targetHeaderData, setTargetHeaderData] = useState<any[]>([]);
  const [targetData, setTargetData] = useState<any[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const flatListRef: any = useRef(null);

  useEffect(() => {
    const { _targetData, _targetHeaderData } = Utils.formatTargetData(treeData);
    setTargetData([..._targetData]);
    setTargetHeaderData([..._targetHeaderData]);
  }, []);

  const chooseNode = (node: any) => {
    let _treeSele = [...treeSele];
    if (_treeSele.length != 0) {
      if (_treeSele[_treeSele.length - 1]['parent_id'] == node.parent_id) {
        _treeSele.splice(_treeSele.length - 1, 1, node);
      } else {
        _treeSele.push(node);
      }
    } else {
      _treeSele.push(node);
    }
    setTreeSele([..._treeSele]);
  };

  const selectTree = async (el: any, index: number) => {
    let _treeSele = [...treeSele];
    setTreeSele([..._treeSele.slice(0, index + 1)]); // 删除从选择前的数据
    setDisabled(el.isLeaf);
  };

  const renderNode = (item: any) => {
    const node: any = Object.values(item)[0];
    return (
      <>
        {node.map((n: any) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => chooseNode(n)}
            style={IndexingViewStyle.itemContent}>
            <Text style={{ height: 30 }}>{n.title}</Text>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  const renderItem = (node: { item: any }) => {
    return (
      <>
        <View style={IndexingViewStyle.itemHead}>
          <Text style={{ height: 16 }}>{Object.keys(node.item)[0]}</Text>
        </View>
        {renderNode(node.item)}
      </>
    );
  };

  const renderItemLayout = (data: any, index: number) => {
    let allHead = 0;
    let allItem = 0;

    for (let i = 0; i < data.length; i++) {
      if (i < index) {
        let value = _.values(data[i])[0];
        allItem += 30 * value.length + 38;
      } else {
        break;
      }
    }
    let offsetAll = allHead + allItem;
    return {
      length: 0,
      offset: offsetAll,
      index,
    };
  };

  const onSelectPress = (item: any) => {
    let preItem = 'A';
    let preIndex = 0;

    _.map(targetData, (value: any, index: number) => {
      if (Object.keys(value)[0] === item) {
        preIndex = index;
        preItem = item;
      }
    });

    flatListRef.current.scrollToIndex({ viewPosition: 0, index: preIndex });
  };

  return (
    <View style={IndexingViewStyle.treeWrap}>
      <View style={IndexingViewStyle.treeContent}>
        <View style={IndexingViewStyle.treeTopWrap}>
          <TouchableOpacity
            onPress={() => {
              onCancel();
            }}
            activeOpacity={1}>
            <Text style={IndexingViewStyle.cancelText}>取消</Text>
          </TouchableOpacity>
          <View>
            <Text style={IndexingViewStyle.titleText}>请选择社区</Text>
          </View>
          <TouchableOpacity disabled={!disabled} onPress={() => onSave(treeSele)} activeOpacity={1}>
            <Text
              style={[
                IndexingViewStyle.affirmText,
                disabled ? IndexingViewStyle.affirmTextAction : null,
              ]}>
              确认
            </Text>
          </TouchableOpacity>
        </View>
        <View style={IndexingViewStyle.treeContentWrap}>
          <View>
            <View style={IndexingViewStyle.treeContentTopWrap}>
              {treeSele.length != 0 ? (
                <>
                  {treeSele.map((el, index) => (
                    <TouchableOpacity
                      disabled={
                        treeSele.length != 1 ? (treeSele.length == index + 1 ? true : false) : false
                      }
                      activeOpacity={0.5}
                      onPress={() => selectTree(el, index)}
                      style={IndexingViewStyle.selectNodeTitle}
                      key={el.org_id}>
                      <Text
                        style={[
                          IndexingViewStyle.treeContentTopText,
                          treeData.length != 1
                            ? treeSele.length == index + 1
                              ? IndexingViewStyle.treeContentTopTextAction
                              : null
                            : null,
                        ]}>
                        {el.title}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </>
              ) : (
                <Text style={IndexingViewStyle.pSelectText}>请选择</Text>
              )}
            </View>
            <FlatList
              style={IndexingViewStyle.flatlistWrap}
              data={targetData}
              ref={flatListRef}
              horizontal={false}
              renderItem={item => renderItem(item)}
              onEndReachedThreshold={0.5}
              showsVerticalScrollIndicator={false}
              getItemLayout={(data, index) => renderItemLayout(data, index)}
              keyExtractor={(item, index) => {
                return index.toString();
              }}
            />
          </View>
          <View style={IndexingViewStyle.sideBoxWrap}>
            <SideBar
              onSelectPress={(item: any) => onSelectPress(item)}
              sideData={targetHeaderData}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export { IndexingView };
