import { service } from './axios';

export type responseBody<T = any> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
};

// 帮助方法
const callback = (response: responseBody, resolve: any) => {
  return resolve(response);
};

export const post = (url: string, data: any) => {
  return new Promise(async (resolve, reject) => {
    const response = (await service.post(url, data)) as responseBody;
    callback(response, resolve);
  });
};

export const get = (url: string) => {
  return new Promise(async (resolve, reject) => {
    const response = (await service.get(url)) as responseBody;
    callback(response, resolve);
  });
};

export const put = (url: string, data: any) => {
  return new Promise(async (reslove, reject) => {
    const response = (await service.put(url, data)) as responseBody;
    callback(response, reslove);
  });
};

export const del = (url: string) => {
  return new Promise(async (resolve, reject) => {
    const response = (await service.delete(url)) as responseBody;
    callback(response, resolve);
  });
};
