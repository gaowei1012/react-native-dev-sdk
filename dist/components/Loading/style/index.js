"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var tools_1 = require("../../../tools");
var styles = react_native_1.StyleSheet.create({
    loding_mask: {
        backgroundColor: '#00000073',
        position: 'absolute',
        bottom: '46%',
        width: (0, tools_1.px2dp)(120),
        height: (0, tools_1.px2dp)(120),
        borderRadius: (0, tools_1.px2dp)(6),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 9999,
    },
});
exports.default = styles;
