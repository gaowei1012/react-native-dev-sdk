import { Text } from 'react-native';
import type, { ComponentLifecycle } from 'react';
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

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hansError: true, error };
  }

  componentDidCatch(...args: Parameters<NonNullable<ComponentDidCatch>>): void {
    const { onDidCatch } = this.props;
    onDidCatch && onDidCatch(...args);
  }

  render() {
    const { children, renderBoundary } = this.props;
    const { hasError, error } = this.state;
    if (hasError) {
      if (renderBoundary && typeof renderBoundary === 'function') {
        return renderBoundary({ error });
      } else {
        return <Text>Something went wrong.</Text>;
      }
    }
    return children;
  }
}
