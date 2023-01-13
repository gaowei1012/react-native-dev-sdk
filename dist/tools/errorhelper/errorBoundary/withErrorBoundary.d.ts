import { ComponentType } from 'react';
import { ErrorBoundaryProps } from './ErrorBoundary';
export declare const withErrorBoundary: (params: ErrorBoundaryProps) => (WrappedComponent: ComponentType) => (props: any) => JSX.Element;
