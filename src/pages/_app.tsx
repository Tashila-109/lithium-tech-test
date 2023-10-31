import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import QueryClientProvider from '@api/QueryClientProvider';

import GlobalStyles from '@/styles/globalstyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#ffffff',
    secondary: '#0070f3',
    background: '#FCFCFC',
    tableBackground: '#f4f4f480',
    typography: {
      header: '#272B30',
      title: '#1A1D1F',
      base: '#6F767E',
    },
  },
  mobile: '768px',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
