"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SideBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/*
 * @Author: mingwei
 * @Date: 2022-04-21 16:37:00
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-24 09:34:15
 * @FilePath: /react-native-dev-sdk/src/components/Indexing/Sidebar.tsx
 * @Description:
 */
/*
 * @Author: mingwei
 * @Date: 2022-04-20 12:59:50
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-21 15:48:12
 * @FilePath: /yl-app/frontend/src/iip/pages/user/ChooseCommunity/Sidebar.tsx
 * @Description:
 */
var react_1 = require("react");
var react_native_1 = require("react-native");
var tools_1 = require("../../tools");
var lodash_1 = __importDefault(require("lodash"));
var SideBar = function (_a) {
    var onSelectPress = _a.onSelectPress, sideData = _a.sideData;
    var _b = (0, react_1.useState)(0), moveDownY = _b[0], setMoveDownY = _b[1];
    var _c = (0, react_1.useState)(''), moveDownKey = _c[0], setMoveDownKey = _c[1];
    var _d = (0, react_1.useState)(false), moveState = _d[0], setMoveState = _d[1];
    var handlerSeekGrant = function (evt, gestureState, item, index) {
        evt.persist(); // 需要加这个函数,来仿制进行复用函数
        setMoveDownY(evt.nativeEvent.pageY);
        setMoveDownKey(item);
    };
    var handlerSeekMove = function (evt, gestureState, item, index) {
        evt.persist(); // 需要加这个函数,来仿制进行复用函数
        setMoveState(true);
        var moveY = evt.nativeEvent.pageY;
        var diff = moveY - moveDownY;
        var diffKey = diff / 36; // 注意高度一定要获取整数,否则在计算的时候,计算误差
        var keyIndex = tools_1.Utils.getEN().indexOf(moveDownKey);
        var endIndex = keyIndex + diffKey;
        var keyValue = tools_1.Utils.getEN()[endIndex];
        if (keyValue) {
            //滑动进行索引
            onSelectPress(keyValue);
        }
    };
    var handlerSeekRelease = function (evt, gestureState, item, index) {
        evt.persist();
        if (!moveState) {
            onSelectPress(item);
        }
        setMoveState(false);
    };
    var renderSideEle = function () {
        var _side = [];
        lodash_1.default.map(sideData, function (side) {
            _side.push(side.substr(0, 1));
        });
        // console.log('_.orderBy(_.uniqWith(_side))', _.orderBy(_.uniqWith(_side)));
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: lodash_1.default.orderBy(lodash_1.default.uniqWith(_side)).map(function (item, index) {
                return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({}, react_native_1.PanResponder.create({
                    onStartShouldSetPanResponder: function (evt, gestureState) { return true; },
                    onStartShouldSetPanResponderCapture: function (evt, gestureState) { return true; },
                    onMoveShouldSetPanResponder: function (evt, gestureState) { return true; },
                    onMoveShouldSetPanResponderCapture: function (evt, gestureState) { return true; },
                    onPanResponderGrant: function (evt, gestureState) {
                        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                        handlerSeekGrant(evt, gestureState, item, index);
                    },
                    onPanResponderMove: function (evt, gestureState) {
                        handlerSeekMove(evt, gestureState, item, index);
                    },
                    onPanResponderTerminationRequest: function (evt, gestureState) { return true; },
                    onPanResponderRelease: function (evt, gestureState) {
                        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                        // 一般来说这意味着一个手势操作已经成功完成。
                        handlerSeekRelease(evt, gestureState, item, index);
                    },
                    onPanResponderTerminate: function (evt, gestureState) {
                        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
                    },
                    onShouldBlockNativeResponder: function (evt, gestureState) {
                        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                        // 默认返回true。目前暂时只支持android。
                        return true;
                    },
                }).panHandlers, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: {
                            width: 120,
                            height: 20,
                            textAlign: 'center',
                            fontSize: 14,
                            color: '#666',
                            fontWeight: 'bold',
                        } }, { children: item.substr(0, 1) }), void 0) }), index === null || index === void 0 ? void 0 : index.toString()));
            }) }, void 0));
    };
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: renderSideEle() }, void 0);
};
exports.SideBar = SideBar;
