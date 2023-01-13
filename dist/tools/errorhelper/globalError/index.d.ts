export type JSErrorHelper = (error: Error, isFatal: boolean) => void;
export declare const setGlobalErrorHandler: (customHandler?: JSErrorHelper, allowedInDevMode?: boolean) => void;
export declare const getGlobalErrorHandler: () => JSErrorHelper;
