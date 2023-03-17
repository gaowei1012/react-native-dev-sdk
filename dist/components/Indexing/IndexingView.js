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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexingView = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_native_1 = require("react-native");
var style_1 = require("./style");
var Sidebar_1 = require("./Sidebar");
var tools_1 = require("../../tools");
var lodash_1 = __importDefault(require("lodash"));
var IndexingView = function (props) {
    var onCancel = props.onCancel, onSave = props.onSave, treeData = props.treeData;
    var _a = (0, react_1.useState)([]), treeSele = _a[0], setTreeSele = _a[1];
    var _b = (0, react_1.useState)([]), targetHeaderData = _b[0], setTargetHeaderData = _b[1];
    var _c = (0, react_1.useState)([]), targetData = _c[0], setTargetData = _c[1];
    var _d = (0, react_1.useState)(false), disabled = _d[0], setDisabled = _d[1];
    var flatListRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a = tools_1.Utils.formatTargetData(treeData), _targetData = _a._targetData, _targetHeaderData = _a._targetHeaderData;
        setTargetData(__spreadArray([], _targetData, true));
        setTargetHeaderData(__spreadArray([], _targetHeaderData, true));
    }, []);
    var chooseNode = function (node) {
        var _treeSele = __spreadArray([], treeSele, true);
        if (_treeSele.length != 0) {
            if (_treeSele[_treeSele.length - 1]['parent_id'] == node.parent_id) {
                _treeSele.splice(_treeSele.length - 1, 1, node);
            }
            else {
                _treeSele.push(node);
            }
        }
        else {
            _treeSele.push(node);
        }
        setTreeSele(__spreadArray([], _treeSele, true));
    };
    var selectTree = function (el, index) { return __awaiter(void 0, void 0, void 0, function () {
        var _treeSele;
        return __generator(this, function (_a) {
            _treeSele = __spreadArray([], treeSele, true);
            setTreeSele(__spreadArray([], _treeSele.slice(0, index + 1), true)); // 删除从选择前的数据
            setDisabled(el.isLeaf);
            return [2 /*return*/];
        });
    }); };
    var renderNode = function (item) {
        var node = Object.values(item)[0];
        return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: node.map(function (n) { return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ activeOpacity: 1, onPress: function () { return chooseNode(n); }, style: style_1.IndexingViewStyle.itemContent }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: { height: 30 } }, { children: n.title })) }))); }) }));
    };
    var renderItem = function (node) {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: style_1.IndexingViewStyle.itemHead }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: { height: 16 } }, { children: Object.keys(node.item)[0] })) })), renderNode(node.item)] }));
    };
    var renderItemLayout = function (data, index) {
        var allHead = 0;
        var allItem = 0;
        for (var i = 0; i < data.length; i++) {
            if (i < index) {
                var value = lodash_1.default.values(data[i])[0];
                allItem += 30 * value.length + 38;
            }
            else {
                break;
            }
        }
        var offsetAll = allHead + allItem;
        return {
            length: 0,
            offset: offsetAll,
            index: index,
        };
    };
    var onSelectPress = function (item) {
        var preItem = 'A';
        var preIndex = 0;
        lodash_1.default.map(targetData, function (value, index) {
            if (Object.keys(value)[0] === item) {
                preIndex = index;
                preItem = item;
            }
        });
        flatListRef.current.scrollToIndex({ viewPosition: 0, index: preIndex });
    };
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: style_1.IndexingViewStyle.treeWrap }, { children: (0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: style_1.IndexingViewStyle.treeContent }, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: style_1.IndexingViewStyle.treeTopWrap }, { children: [(0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ onPress: function () {
                                onCancel();
                            }, activeOpacity: 1 }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: style_1.IndexingViewStyle.cancelText }, { children: "\u53D6\u6D88" })) })), (0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: style_1.IndexingViewStyle.titleText }, { children: "\u8BF7\u9009\u62E9\u793E\u533A" })) }), (0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ disabled: !disabled, onPress: function () { return onSave(treeSele); }, activeOpacity: 1 }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: [style_1.IndexingViewStyle.affirmText, disabled ? style_1.IndexingViewStyle.affirmTextAction : null] }, { children: "\u786E\u8BA4" })) }))] })), (0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: style_1.IndexingViewStyle.treeContentWrap }, { children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: style_1.IndexingViewStyle.treeContentTopWrap }, { children: treeSele.length != 0 ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: treeSele.map(function (el, index) { return ((0, jsx_runtime_1.jsx)(react_native_1.TouchableOpacity, __assign({ disabled: treeSele.length != 1 ? (treeSele.length == index + 1 ? true : false) : false, activeOpacity: 0.5, onPress: function () { return selectTree(el, index); }, style: style_1.IndexingViewStyle.selectNodeTitle }, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: [style_1.IndexingViewStyle.treeContentTopText, treeData.length != 1 ? (treeSele.length == index + 1 ? style_1.IndexingViewStyle.treeContentTopTextAction : null) : null] }, { children: el.title })) }), el.org_id)); }) })) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, __assign({ style: style_1.IndexingViewStyle.pSelectText }, { children: "\u8BF7\u9009\u62E9" }))) })), (0, jsx_runtime_1.jsx)(react_native_1.FlatList, { style: style_1.IndexingViewStyle.flatlistWrap, data: targetData, ref: flatListRef, horizontal: false, renderItem: function (item) { return renderItem(item); }, onEndReachedThreshold: 0.5, showsVerticalScrollIndicator: false, getItemLayout: function (data, index) { return renderItemLayout(data, index); }, keyExtractor: function (item, index) {
                                        return index.toString();
                                    } })] }), (0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: style_1.IndexingViewStyle.sideBoxWrap }, { children: (0, jsx_runtime_1.jsx)(Sidebar_1.SideBar, { onSelectPress: function (item) { return onSelectPress(item); }, sideData: targetHeaderData }) }))] }))] })) })));
};
exports.IndexingView = IndexingView;
