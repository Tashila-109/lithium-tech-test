import { QueryClient, QueryClientProvider as RQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

// Create a client
export const TCQueryClient = new QueryClient();

type Props = React.PropsWithChildren<{ disableDevTools?: boolean }>;

const QueryClientProvider: React.FC<Props> = ({ children, disableDevTools = false }) => (
  <RQueryClientProvider client={TCQueryClient}>
    {children}
    {!disableDevTools && <ReactQueryDevtools initialIsOpen={false} />}
  </RQueryClientProvider>
);

export default QueryClientProvider;
