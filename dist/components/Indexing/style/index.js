"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-04-21 16:44:04
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 10:47:10
 * @FilePath: /react-native-dev-sdk/src/components/Indexing/style/index.ts
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexingViewStyle = void 0;
var tools_1 = require("../../../tools");
var react_native_1 = require("react-native");
var IndexingViewStyle = react_native_1.StyleSheet.create({
    treeWrap: {
        flex: 1,
        width: (0, tools_1.width)(),
        height: (0, tools_1.height)(),
        backgroundColor: 'rgba(34, 34, 46, 0.39)',
    },
    treeContent: {
        position: 'absolute',
        bottom: 0,
        width: (0, tools_1.width)(),
        height: (0, tools_1.px2dp)(608),
        backgroundColor: '#fff',
        borderTopLeftRadius: (0, tools_1.px2dp)(6),
        borderTopRightRadius: (0, tools_1.px2dp)(6),
    },
    treeTopWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: (0, tools_1.px2dp)(24),
    },
    cancelText: {
        color: '#A8A9AA',
        fontSize: (0, tools_1.px2dp)(16),
        lineHeight: (0, tools_1.px2dp)(22),
    },
    titleText: {
        color: '#06121E',
        fontSize: (0, tools_1.px2dp)(18),
        lineHeight: (0, tools_1.px2dp)(22),
        fontWeight: 'bold',
    },
    affirmText: {
        color: '#A8A9AA',
        fontSize: (0, tools_1.px2dp)(16),
        lineHeight: (0, tools_1.px2dp)(22),
    },
    affirmTextAction: {
        color: '#3A84D9',
    },
    treeNodeWrap: {
        marginLeft: (0, tools_1.px2dp)(25),
        flex: 1,
    },
    treeContentWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flatlistWrap: {
        width: (0, tools_1.width)(),
        height: (0, tools_1.px2dp)(508),
    },
    sideBoxWrap: {
        position: 'absolute',
        right: (0, tools_1.px2dp)(6),
        backgroundColor: 'rgba(211, 211, 211, 0.4)',
        width: (0, tools_1.px2dp)(20),
        borderRadius: 15,
        alignItems: 'center',
        paddingVertical: (0, tools_1.px2dp)(8),
        alignSelf: 'center',
    },
    scrollContentWrap: {
        height: (0, tools_1.px2dp)(508),
        justifyContent: 'center',
    },
    treeNode: {
        paddingHorizontal: (0, tools_1.px2dp)(20),
        paddingVertical: (0, tools_1.px2dp)(10),
    },
    treeContentTopWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: (0, tools_1.px2dp)(20),
        height: (0, tools_1.px2dp)(30),
        lineHeight: (0, tools_1.px2dp)(30),
        marginBottom: (0, tools_1.px2dp)(18),
        flexWrap: 'wrap',
    },
    treeContentTopText: {
        height: (0, tools_1.px2dp)(20),
        lineHeight: (0, tools_1.px2dp)(20),
        fontSize: (0, tools_1.px2dp)(14),
    },
    treeContentTopTextAction: {
        color: 'red',
        fontSize: (0, tools_1.px2dp)(14),
    },
    selectNodeTitle: {
        flexWrap: 'wrap',
        paddingRight: (0, tools_1.px2dp)(10),
    },
    itemHead: {
        paddingVertical: (0, tools_1.px2dp)(10),
        // borderBottomColor: 'rgba(211, 211, 211, 0.3)',
        // borderBottomWidth: px2dp(1),
        paddingHorizontal: (0, tools_1.px2dp)(16),
    },
    itemContent: {
        paddingHorizontal: (0, tools_1.px2dp)(16),
        paddingTop: (0, tools_1.px2dp)(10),
    },
    pSelectText: {
        fontSize: (0, tools_1.px2dp)(14),
    },
});
exports.IndexingViewStyle = IndexingViewStyle;
