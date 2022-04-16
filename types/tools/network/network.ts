/*
 * @Author: mingwei
 * @Date: 2022-04-16 21:58:35
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-16 22:00:54
 * @FilePath: /react-native-dev-sdk/types/tools/network/network.ts
 * @Description:
 */

export interface responseBody<T = any> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export interface requestOptions {
  showloading?: boolean;
  throwErr?: boolean;
  showMessage?: boolean;
}
