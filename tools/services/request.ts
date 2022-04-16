/*
 * @Author: mingwei
 * @Date: 2022-04-16 21:52:47
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-16 22:18:59
 * @FilePath: /react-native-dev-sdk/tools/services/request.ts
 * @Description:
 */
import axios, { AxiosResponse, AxiosError, Method } from 'axios';
import { requestOptions, responseBody } from '../../types';

const defaultRequestOption: requestOptions = {
  showloading: false,
  throwErr: false,
  showMessage: true,
};

export function request(
  url: string,
  method: Method,
  data?: object,
  options?: requestOptions,
  atomic: boolean = true,
  headersParams?: object
) {
  const { showMessage, showloading, throwErr } = { ...defaultRequestOption, ...options };
  return new Promise(async (resolve, reject) => {
    let body = method === 'GET' ? 'params' : 'data';
    axios({
      url,
      method,
      [body]: data === null ? '' : data,
      headers: {
        'Content-Type': 'application/json',
        ...headersParams,
      },
    })
      .then((res: AxiosResponse<responseBody>) => {
        if (atomic) {
          // TODO
        }
        if (res.status === 200 && res.data.success === true && res.data.statusCode === 200) {
          resolve(res.data);
        } else {
          throw res.data;
        }
      })
      .catch((err: AxiosError) => {
        reject(err);
      });
  });
}
