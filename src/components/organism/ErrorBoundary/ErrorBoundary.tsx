import { Component, type ErrorInfo } from 'react';
import { ErrorDetails, ErrorMessage, ErrorWrapper, ReloadButton } from './ErrorBoundary.styled';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo) {
    this.setState({ hasError: true, error });

    console.error(error);
    console.error(errorInfo);
  }

  handleReload = () => {
    if (typeof window !== 'undefined') window.location.reload();
  };

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorWrapper>
          <ErrorMessage>Oops! Something went wrong.</ErrorMessage>
          <ErrorDetails>
            Please try reloading the page, or contact support if the problem persists.
          </ErrorDetails>
          <ReloadButton onClick={this.handleReload}>Reload Page</ReloadButton>
        </ErrorWrapper>
      );
    }
    return children;
  }
}
