import { ComponentType } from 'react';
import { ErrorBoundaryProps, ErrorBoundary } from './ErrorBoundary';

export const withErrorBoundary = (params: ErrorBoundaryProps) => (WrappedComponent: ComponentType) => {
  const { renderBoundary, onDidCatch } = params;
  return (props: any) => {
    return (
      <ErrorBoundary renderBoundary={renderBoundary} onDidCatch={onDidCatch}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };
};
