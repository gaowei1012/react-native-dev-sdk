/**
 * 全局错误收集方法
 */

import { setPromiseUnCatchHandler } from './promiseTracker';
import { ErrorBoundary } from './errorBoundary/ErrorBoundary';
import { withErrorBoundary } from './errorBoundary/withErrorBoundary';
import { getGlobalErrorHandler, setGlobalErrorHandler } from './globalError';

export { setGlobalErrorHandler, getGlobalErrorHandler, setPromiseUnCatchHandler, ErrorBoundary, withErrorBoundary };
