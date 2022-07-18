import { CommonActions, StackActions } from '@react-navigation/native';

class NavigatorUtils {
  static navigator: any;

  /**
   * 初始化路由方法
   * @param navigatorRef
   */
  static initNavihator(navigatorRef: any) {
    this.navigator = navigatorRef;
  }

  /**
   * view页面跳转
   * @param name 需要跳转的路由名称
   * @param params 路由参数，这里可以传递 { ... }
   */
  static navigate(name: string, params = {}) {
    this.navigator.dispatch(
      CommonActions.navigate({
        name,
        params,
      })
    );
  }

  /**
   * 重置路由
   * @param name 要重置的路由地址
   * @param params 需要传递的参数
   */
  static reset(name: string, params = {}) {
    this.navigator.dispatch(
      CommonActions.reset({
        index: 0, // 重置到路由开始页面
        routes: [
          {
            name,
            params,
          },
        ],
      })
    );
  }

  /**
   * 假设有这样的场景，A navigate到B，B完成任务后要到C，C返回的不是B，而是A，此时使用B replace C即可实现需求
   * @param name 路由名称
   * @param params 路由参数
   */
  static replace(name: string, params = {}) {
    this.navigator.dispatch(StackActions.replace(name, params));
  }

  /**
   * 返回上一级页面路由
   */
  static back() {
    this.navigator.dispatch(CommonActions.goBack());
  }

  /**
   * 获取路由传递的params值
   * @returns
   */
  static getRouteParams() {
    return this.navigator.getCurrentRoute().params;
  }
}

export { NavigatorUtils };
