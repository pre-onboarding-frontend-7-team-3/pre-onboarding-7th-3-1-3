import { AdServiceProvider } from 'context/AdServiceContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AdService from 'service/AdService';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import Theme from 'styles/theme';
import './index.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import Router from './Router';
import createAxiosClient from './service/axiosClient';

const BASE_URL = process.env.REACT_APP_BASE_URL || '';
const axiosInstance = createAxiosClient(BASE_URL);
const adService = new AdService(axiosInstance);
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdServiceProvider adService={adService}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </AdServiceProvider>
  </React.StrictMode>
);
