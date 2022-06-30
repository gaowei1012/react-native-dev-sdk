"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderShadow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/*
 * @Author: mingwei
 * @Date: 2022-06-30 15:28:01
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-30 15:53:21
 * @FilePath: /react-native-dev-sdk/src/tools/utils/shadow/BorderShadow.tsx
 * @Description:
 */
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_svg_1 = __importStar(require("react-native-svg"));
var BorderShadow = /** @class */ (function (_super) {
    __extends(BorderShadow, _super);
    function BorderShadow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            var _a = _this.props, _b = _a.setting, _c = _b.side, side = _c === void 0 ? 'bottom' : _c, _d = _b.width, width = _d === void 0 ? 0 : _d, _e = _b.color, color = _e === void 0 ? '#000' : _e, _f = _b.border, border = _f === void 0 ? 0 : _f, _g = _b.opacity, opacity = _g === void 0 ? 1 : _g, _h = _b.inset, inset = _h === void 0 ? false : _h, _j = _b.style, style = _j === void 0 ? {} : _j, children = _a.children;
            var linear = function (key) {
                return [
                    (0, jsx_runtime_1.jsx)(react_native_svg_1.Stop, { offset: "0", stopColor: color, stopOpacity: opacity }, key + 'Linear0'),
                    (0, jsx_runtime_1.jsx)(react_native_svg_1.Stop, { offset: "1", stopColor: color, stopOpacity: "0" }, key + 'Linear1'),
                ];
            };
            var lineWidth = border;
            return ((0, jsx_runtime_1.jsx)(react_native_1.View, __assign({ style: [{ position: 'relative', width: width }, style] }, { children: (function () {
                    switch (side) {
                        case 'top':
                            return __spreadArray([
                                (0, jsx_runtime_1.jsxs)(react_native_svg_1.default, __assign({ height: lineWidth, width: width + lineWidth, style: { position: 'absolute', top: inset ? 0 : -lineWidth } }, { children: [(0, jsx_runtime_1.jsxs)(react_native_svg_1.Defs, { children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.LinearGradient, __assign({ id: "top", x1: "0%", x2: "0%", y1: "100%", y2: "0%" }, { children: linear('BorderTop') }), void 0), (0, jsx_runtime_1.jsx)(react_native_svg_1.LinearGradient, __assign({ id: "top-inset", x1: "0%", x2: "0%", y1: "0%", y2: "100%" }, { children: linear('BorderTopInset') }), void 0)] }, void 0), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { x: 0, y: 0, width: width, height: lineWidth, fill: "url(#top" + (inset ? '-inset' : '') + ")" }, void 0)] }), void 0)
                            ], children, true);
                        case 'bottom':
                            return __spreadArray(__spreadArray([], children, true), [
                                (0, jsx_runtime_1.jsxs)(react_native_svg_1.default, __assign({ height: lineWidth, width: width + lineWidth, style: { position: 'absolute', bottom: inset ? -lineWidth : 0 } }, { children: [(0, jsx_runtime_1.jsxs)(react_native_svg_1.Defs, { children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.LinearGradient, __assign({ id: "bottom", x1: "0%", x2: "0%", y1: "0%", y2: "100%" }, { children: linear('BorderBottom') }), void 0), (0, jsx_runtime_1.jsx)(react_native_svg_1.LinearGradient, __assign({ id: "bottom-inset", x1: "0%", x2: "0%", y1: "100%", y2: "0%" }, { children: linear('BorderBottomInset') }), void 0)] }, void 0), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { x: 0, y: 0, width: width, height: lineWidth, fill: "url(#bottom" + (inset ? '-inset' : '') + ")" }, void 0)] }), void 0),
                            ], false);
                        default:
                            throw new Error("Wrong Type of Side! We just support 'top' and 'bottom'");
                            return null;
                    }
                })() }), void 0));
        };
        return _this;
    }
    return BorderShadow;
}(react_1.Component));
exports.BorderShadow = BorderShadow;
