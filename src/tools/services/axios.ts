import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

// 设置axios默认属性
const service = axios.create({
  timeout: 3 * 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 设置跨域
service.defaults.withCredentials = true;

// 请求拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log('config: =>', config);
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status == 200 && response.statusText == 'OK') {
      return response;
    }
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

export { service };
