declare class NavigatorUtils {
    static navigator: any;
    /**
     * 初始化路由方法
     * @param navigatorRef
     */
    static initNavihator(navigatorRef: any): void;
    /**
     * view页面跳转
     * @param name 需要跳转的路由名称
     * @param params 路由参数，这里可以传递 { ... }
     */
    static navigate(name: string, params?: {}): void;
    /**
     * 重置路由
     * @param name 要重置的路由地址
     * @param params 需要传递的参数
     */
    static reset(name: string, params?: {}): void;
    /**
     * 假设有这样的场景，A navigate到B，B完成任务后要到C，C返回的不是B，而是A，此时使用B replace C即可实现需求
     * @param name 路由名称
     * @param params 路由参数
     */
    static replace(name: string, params?: {}): void;
    /**
     * 返回上一级页面路由
     */
    static back(): void;
    /**
     * 获取路由传递的params值
     * @returns
     */
    static getRouteParams(): any;
}
export { NavigatorUtils };
