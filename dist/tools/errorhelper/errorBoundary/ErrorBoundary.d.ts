import { ComponentLifecycle } from 'react';
import React, { Component } from 'react';
type ComponentDidCatch = ComponentLifecycle<{}, {}>['componentDidCatch'];
export interface ErrorBoundaryProps {
    /**
     * Render Component when the ErrorBoundary catches an error.
     */
    renderBoundary?: (error: any) => React.ReactNode | JSX.Element;
    /**
     * Error catch function
     */
    onDidCatch?: NonNullable<ComponentDidCatch>;
    /**
     * ReactNode Children
     */
    children?: React.ReactNode | JSX.Element;
}
export interface ErrorBoundaryState {
    hasError: boolean;
    error: any;
}
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: any): {
        hansError: boolean;
        error: any;
    };
    componentDidCatch(...args: Parameters<NonNullable<ComponentDidCatch>>): void;
    render(): {};
}
export {};
