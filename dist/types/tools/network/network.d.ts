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
