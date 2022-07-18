"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigatorUtils = void 0;
var native_1 = require("@react-navigation/native");
var NavigatorUtils = /** @class */ (function () {
    function NavigatorUtils() {
    }
    /**
     * 初始化路由方法
     * @param navigatorRef
     */
    NavigatorUtils.initNavihator = function (navigatorRef) {
        this.navigator = navigatorRef;
    };
    /**
     * view页面跳转
     * @param name 需要跳转的路由名称
     * @param params 路由参数，这里可以传递 { ... }
     */
    NavigatorUtils.navigate = function (name, params) {
        if (params === void 0) { params = {}; }
        this.navigator.dispatch(native_1.CommonActions.navigate({
            name: name,
            params: params,
        }));
    };
    /**
     * 重置路由
     * @param name 要重置的路由地址
     * @param params 需要传递的参数
     */
    NavigatorUtils.reset = function (name, params) {
        if (params === void 0) { params = {}; }
        this.navigator.dispatch(native_1.CommonActions.reset({
            index: 0,
            routes: [
                {
                    name: name,
                    params: params,
                },
            ],
        }));
    };
    /**
     * 假设有这样的场景，A navigate到B，B完成任务后要到C，C返回的不是B，而是A，此时使用B replace C即可实现需求
     * @param name 路由名称
     * @param params 路由参数
     */
    NavigatorUtils.replace = function (name, params) {
        if (params === void 0) { params = {}; }
        this.navigator.dispatch(native_1.StackActions.replace(name, params));
    };
    /**
     * 返回上一级页面路由
     */
    NavigatorUtils.back = function () {
        this.navigator.dispatch(native_1.CommonActions.goBack());
    };
    /**
     * 获取路由传递的params值
     * @returns
     */
    NavigatorUtils.getRouteParams = function () {
        return this.navigator.getCurrentRoute().params;
    };
    return NavigatorUtils;
}());
exports.NavigatorUtils = NavigatorUtils;
