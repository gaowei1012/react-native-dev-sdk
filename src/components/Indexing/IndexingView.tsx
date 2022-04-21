/*
 * @Author: mingwei
 * @Date: 2022-04-21 16:42:37
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-21 16:56:02
 * @FilePath: /react-native-dev-sdk/src/components/Indexing/IndexingView.tsx
 * @Description:
 */

import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { IndexingViewStyle } from './style';
import { SideBar } from './Sidebar';
import _ from 'lodash';

const IndexingView: React.FC<{ onCancel: any; onSave: any }> = props => {
  const { onCancel, onSave } = props;
  const [treeSele, setTreeSele] = useState<any[]>([]);
  const [targetHeaderData, setTargetHeaderData] = useState<any[]>([]);
  const [targetData, setTargetData] = useState<any[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);
  const flatListRef: any = useRef(null);

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

  const renderItem = ({ item }) => {
    return (
      <>
        {item.head ? (
          <View style={IndexingViewStyle.itemHead}>
            <Text style={{ height: 16 }}>{item.title.substr(0, 1)}</Text>
          </View>
        ) : (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => chooseNode(item)}
            style={IndexingViewStyle.itemContent}>
            <Text style={{ height: 30 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      </>
    );
  };

  const renderItemLayout = (data: any, index: number) => {
    let len = data[index].head ? 16 : 100;
    let allHead = 0;
    let allItem = 0;
    for (let i = 0; i < data.length; i++) {
      if (i < index) {
        if (data[i].head) {
          allHead += 16;
        } else {
          allItem += 30 + 1;
        }
      } else {
        break;
      }
    }
    let offsetAll = allHead + allItem;
    // console.log('len', len, 'offset', offsetAll, 'index', index);
    return {
      length: len,
      offset: offsetAll,
      index,
    };
  };

  const onSelectPress = (item: any) => {
    let hasExit = false;
    let preItem = 'A';
    let preIndex = 0;

    _.map(targetData, (t: any, index: any) => {
      if (t.head) {
        if (t.title.substr(0, 1) === item) {
          hasExit = true;
          preIndex = index;
          preItem = item;
        }
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
                      disabled={treeSele.length == index + 1 ? true : false}
                      activeOpacity={0.5}
                      onPress={() => selectTree(el, index)}
                      style={IndexingViewStyle.selectNodeTitle}
                      key={el.org_id}>
                      <Text
                        style={[
                          IndexingViewStyle.treeContentTopText,
                          treeSele.length == index + 1
                            ? IndexingViewStyle.treeContentTopTextAction
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
