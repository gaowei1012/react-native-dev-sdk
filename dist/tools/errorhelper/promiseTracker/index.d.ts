export type PromiseUnCatchHandler = (id: string, error: Error) => void;
/**
 *
 * @param {Function} customHandler
 * @param {Boolean} allowedInDevMode
 * @returns
 */
export declare const setPromiseUnCatchHandler: (customHandler?: PromiseUnCatchHandler, allowedInDevMode?: boolean) => void;
