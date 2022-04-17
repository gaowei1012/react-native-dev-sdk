import { Method } from 'axios';
import { requestOptions } from '../../types';
export declare function request(url: string, method: Method, data?: object, options?: requestOptions, atomic?: boolean, headersParams?: object): Promise<unknown>;
