"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchStyle = void 0;
var react_native_1 = require("react-native");
var tools_1 = require("../../../tools");
exports.searchStyle = react_native_1.StyleSheet.create({
    search_wrap: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    search_left_wrap: {
        flexDirection: 'row',
        width: '80%',
        borderRadius: (0, tools_1.px2dp)(20),
        paddingVertical: (0, tools_1.px2dp)(8),
    },
    search_content_wrap: {
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    search_icon: {
        marginHorizontal: (0, tools_1.px2dp)(6),
        width: (0, tools_1.px2dp)(20),
        height: (0, tools_1.px2dp)(20),
    },
    search_textinput: {
        paddingLeft: (0, tools_1.px2dp)(30),
    },
    search_onpress_text: {
        paddingHorizontal: (0, tools_1.px2dp)(14),
    },
});
