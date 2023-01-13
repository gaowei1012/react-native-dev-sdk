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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxShadow = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
/*
 * @Author: mingwei
 * @Date: 2022-06-30 15:28:29
 * @LastEditors: mingwei
 * @LastEditTime: 2022-07-01 09:11:29
 * @FilePath: /react-native-dev-sdk/src/tools/utils/shadow/BoxShadow.tsx
 * @Description:
 */
var react_1 = require("react");
var react_native_1 = require("react-native");
var tools_1 = require("./tools");
var react_native_svg_1 = __importStar(require("react-native-svg"));
var BoxShadow = /** @class */ (function (_super) {
    __extends(BoxShadow, _super);
    function BoxShadow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.render = function () {
            //get the shadow settings and give them default values
            var _a = _this.props, _b = _a.setting, _c = _b.width, width = _c === void 0 ? 0 : _c, _d = _b.height, height = _d === void 0 ? 0 : _d, _e = _b.color, color = _e === void 0 ? '#000' : _e, _f = _b.border, border = _f === void 0 ? 0 : _f, _g = _b.radius, radius = _g === void 0 ? 0 : _g, _h = _b.opacity, opacity = _h === void 0 ? 1 : _h, _j = _b.x, x = _j === void 0 ? 0 : _j, _k = _b.y, y = _k === void 0 ? 0 : _k, _l = _b.style, style = _l === void 0 ? {} : _l, children = _a.children;
            //define the lengths
            var lineWidth = border, rectWidth = width - radius * 2, rectHeight = height - radius * 2;
            //format the color
            var rgb = (0, tools_1.colorRgb)(color);
            //the same parts for gradients
            var linear = function (key) {
                return [
                    (0, jsx_runtime_1.jsx)(react_native_svg_1.Stop, { offset: "0", stopColor: color, stopOpacity: opacity }, key + 'Linear0'),
                    (0, jsx_runtime_1.jsx)(react_native_svg_1.Stop, { offset: "1", stopColor: color, stopOpacity: "0" }, key + 'Linear1'),
                ];
            };
            var radial = function (key) {
                return [
                    (0, jsx_runtime_1.jsx)(react_native_svg_1.Stop, { offset: "0", stopColor: color, stopOpacity: opacity }, key + 'Radial0'),
                    (0, jsx_runtime_1.jsx)(react_native_svg_1.Stop, { offset: (radius / (lineWidth + radius)).toString(), stopColor: color, stopOpacity: opacity }, key + 'Radial1'),
                    (0, jsx_runtime_1.jsx)(react_native_svg_1.Stop, { offset: "1", stopColor: color, stopOpacity: "0" }, key + 'Radial2'),
                ];
            };
            var outerWidth = lineWidth + radius;
            //return a view ,whose background is a svg picture
            return ((0, jsx_runtime_1.jsxs)(react_native_1.View, __assign({ style: [{ position: 'relative', width: width, height: height }, style] }, { children: [(0, jsx_runtime_1.jsxs)(react_native_svg_1.default, __assign({ height: height + lineWidth * 2 + radius * 2, width: width + lineWidth * 2 + radius * 2, style: { position: 'absolute', top: y - lineWidth, left: x - lineWidth } }, { children: [(0, jsx_runtime_1.jsxs)(react_native_svg_1.Defs, { children: [(0, jsx_runtime_1.jsx)(react_native_svg_1.LinearGradient, __assign({ id: "top", x1: "0%", x2: "0%", y1: "100%", y2: "0%" }, { children: linear('BoxTop') })), (0, jsx_runtime_1.jsx)(react_native_svg_1.LinearGradient, __assign({ id: "bottom", x1: "0%", x2: "0%", y1: "0%", y2: "100%" }, { children: linear('BoxBottom') })), (0, jsx_runtime_1.jsx)(react_native_svg_1.LinearGradient, __assign({ id: "left", x1: "100%", y1: "0%", x2: "0%", y2: "0%" }, { children: linear('BoxLeft') })), (0, jsx_runtime_1.jsx)(react_native_svg_1.LinearGradient, __assign({ id: "right", x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, { children: linear('BoxRight') })), (0, jsx_runtime_1.jsx)(react_native_svg_1.RadialGradient, __assign({ id: "border-left-top", r: "100%", cx: "100%", cy: "100%", fx: "100%", fy: "100%" }, { children: radial('BoxLeftTop') })), (0, jsx_runtime_1.jsx)(react_native_svg_1.RadialGradient, __assign({ id: "border-left-bottom", r: "100%", cx: "100%", cy: "0%", fx: "100%", fy: "0%" }, { children: radial('BoxLeftBottom') })), (0, jsx_runtime_1.jsx)(react_native_svg_1.RadialGradient, __assign({ id: "border-right-top", r: "100%", cx: "0%", cy: "100%", fx: "0%", fy: "100%" }, { children: radial('BoxRightTop') })), (0, jsx_runtime_1.jsx)(react_native_svg_1.RadialGradient, __assign({ id: "border-right-bottom", r: "100%", cx: "0%", cy: "0%", fx: "0%", fy: "0%" }, { children: radial('BoxRightBottom') }))] }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M 0 ".concat(outerWidth, ",Q 0 0 ").concat(outerWidth, " 0,v ").concat(lineWidth, ",q ").concat(-radius, " 0 ").concat(-radius, " ").concat(radius, ",h ").concat(-lineWidth, ",z"), fill: "url(#border-left-top)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M ".concat(rectWidth + lineWidth + radius, " 0,q ").concat(outerWidth, " 0 ").concat(outerWidth, " ").concat(outerWidth, ",h ").concat(-lineWidth, ",q 0 ").concat(-radius, " ").concat(-radius, " ").concat(-radius, ",v ").concat(-lineWidth, ",z"), fill: "url(#border-right-top)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M ".concat(rectWidth + lineWidth + 2 * radius, " ").concat(rectHeight + lineWidth + radius, ",h ").concat(lineWidth, ",q 0 ").concat(outerWidth, " -").concat(outerWidth, " ").concat(outerWidth, ",v ").concat(-lineWidth, ",q ").concat(radius, " 0 ").concat(radius, " ").concat(-radius, ",z"), fill: "url(#border-right-bottom)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M 0 ".concat(rectHeight + lineWidth + radius, ",q 0 ").concat(outerWidth, " ").concat(outerWidth, " ").concat(outerWidth, ",v ").concat(-lineWidth, ",q ").concat(-radius, " 0 ").concat(-radius, " ").concat(-radius, ",h ").concat(-lineWidth, ",z"), fill: "url(#border-left-bottom)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { x: outerWidth, y: "0", width: rectWidth, height: lineWidth, fill: "url(#top)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { x: "0", y: outerWidth, width: lineWidth, height: rectHeight, fill: "url(#left)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { x: rectWidth + lineWidth + 2 * radius, y: outerWidth, width: lineWidth, height: rectHeight, fill: "url(#right)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Rect, { x: outerWidth, y: rectHeight + lineWidth + 2 * radius, width: rectWidth, height: lineWidth, fill: "url(#bottom)" }), (0, jsx_runtime_1.jsx)(react_native_svg_1.Path, { d: "M ".concat(outerWidth, " ").concat(lineWidth, ",h ").concat(rectWidth, ",q ").concat(radius, " 0 ").concat(radius, " ").concat(radius, ",v ").concat(rectHeight, ",q 0 ").concat(radius, " -").concat(radius, " ").concat(radius, ",h -").concat(rectWidth, ",q -").concat(radius, " 0 -").concat(radius, " -").concat(radius, ",v -").concat(rectHeight, ",q 0 -").concat(radius, " ").concat(radius, " -").concat(radius), fill: "rgba(".concat(rgb[0], ",").concat(rgb[1], ",").concat(rgb[2], ",").concat(opacity || 1, ")") })] })), children] })));
        };
        return _this;
    }
    return BoxShadow;
}(react_1.Component));
exports.BoxShadow = BoxShadow;
