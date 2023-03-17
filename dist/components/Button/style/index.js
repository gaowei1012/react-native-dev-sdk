"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonStyle = void 0;
var react_native_1 = require("react-native");
var tools_1 = require("../../../tools");
exports.buttonStyle = react_native_1.StyleSheet.create({
    wrap: {
        height: (0, tools_1.px2dp)(32),
        borderRadius: (0, tools_1.px2dp)(4),
        alignItems: 'center',
        justifyContent: 'center',
    },
    default: {
        backgroundColor: '#ddd',
    },
});
