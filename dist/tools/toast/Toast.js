"use strict";
/*
 * @Author: mingwei
 * @Date: 2022-04-16 14:52:19
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-16 15:27:08
 * @FilePath: /react-native-dev-sdk/tools/toast.ts
 * @Description: Toast 轻提示
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootToast = void 0;
var react_native_root_toast_1 = __importDefault(require("react-native-root-toast"));
var RootToast = /** @class */ (function () {
    function RootToast() {
    }
    /**
     *
     * @param msg 提示内容
     * @param duration 页面存留时间，默认为3秒
     */
    RootToast.showToast = function (options) {
        var position = options.position, msg = options.msg, duration = options.duration, animation = options.animation, shadow = options.shadow, backgroundColor = options.backgroundColor, containerStyle = options.containerStyle, onHidden = options.onHidden, onPress = options.onPress, onShow = options.onShow, delay = options.delay;
        // 默认0为居中模式
        var _position = 0;
        switch (position) {
            case 'center':
                _position = react_native_root_toast_1.default.positions.CENTER;
            case 'top':
                _position = react_native_root_toast_1.default.positions.TOP;
            case 'bottom':
                _position = react_native_root_toast_1.default.positions.BOTTOM;
        }
        // 显示Toast
        this.toast = react_native_root_toast_1.default.show(msg, {
            containerStyle: containerStyle,
            backgroundColor: backgroundColor,
            position: _position,
            duration: duration,
            shadow: shadow,
            animation: animation,
            delay: delay,
            onShow: onShow,
            onHidden: onHidden,
            onPress: onPress,
        });
    };
    return RootToast;
}());
exports.RootToast = RootToast;
