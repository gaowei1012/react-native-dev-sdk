"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
var axios_1 = __importDefault(require("axios"));
// 设置axios默认属性
var service = axios_1.default.create({
    timeout: 3 * 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});
exports.service = service;
// 设置跨域
service.defaults.withCredentials = true;
// 请求拦截
service.interceptors.request.use(function (config) {
    console.log('config: =>', config);
    return config;
}, function (err) {
    return Promise.reject(err);
});
// 响应拦截
service.interceptors.response.use(function (response) {
    if (response.status == 200 && response.statusText == 'OK') {
        return response;
    }
}, function (err) {
    return Promise.reject(err);
});
