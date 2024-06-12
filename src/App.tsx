import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeProvider from '@/contexts/ThemeProvider';
import { ErrorBoundary } from '@/organism/ErrorBoundary';
import AppRoutes from '@/pages';
import GlobalStyle from '@/theme/globalStyles';

const App = () => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
