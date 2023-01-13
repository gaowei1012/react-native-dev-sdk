export type responseBody<T = any> = {
    success: boolean;
    statusCode: number;
    message: string;
    data: T;
};
export declare const post: (url: string, data: any) => Promise<unknown>;
export declare const get: (url: string) => Promise<unknown>;
export declare const put: (url: string, data: any) => Promise<unknown>;
export declare const del: (url: string) => Promise<unknown>;
