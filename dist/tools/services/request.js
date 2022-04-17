"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
/*
 * @Author: mingwei
 * @Date: 2022-04-16 21:52:47
 * @LastEditors: mingwei
 * @LastEditTime: 2022-04-17 10:31:22
 * @FilePath: /react-native-dev-sdk/src/tools/services/request.ts
 * @Description:
 */
var axios_1 = __importDefault(require("axios"));
var defaultRequestOption = {
    showloading: false,
    throwErr: false,
    showMessage: true,
};
function request(url, method, data, options, atomic, headersParams) {
    var _this = this;
    if (atomic === void 0) { atomic = true; }
    var _a = __assign(__assign({}, defaultRequestOption), options), showMessage = _a.showMessage, showloading = _a.showloading, throwErr = _a.throwErr;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var body;
        var _a;
        return __generator(this, function (_b) {
            body = method === 'GET' ? 'params' : 'data';
            (0, axios_1.default)((_a = {
                    url: url,
                    method: method
                },
                _a[body] = data === null ? '' : data,
                _a.headers = __assign({ 'Content-Type': 'application/json' }, headersParams),
                _a))
                .then(function (res) {
                if (atomic) {
                    // TODO
                }
                if (res.status === 200 && res.data.success === true && res.data.statusCode === 200) {
                    resolve(res.data);
                }
                else {
                    throw res.data;
                }
            })
                .catch(function (err) {
                reject(err);
            });
            return [2 /*return*/];
        });
    }); });
}
exports.request = request;
