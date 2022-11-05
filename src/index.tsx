import { AdsServiceProvider } from 'context/AdServiceContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AdService from 'service/AdService';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/GlobalStyle';
import Theme from 'styles/theme';
import './index.css';
import Router from './Router';
import createAxiosClient from './service/axiosClient';

const BASE_URL = process.env.REACT_APP_BASE_URL || '';
const axiosInstance = createAxiosClient(BASE_URL);
const adService = new AdService(axiosInstance);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AdsServiceProvider adService={adService}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AdsServiceProvider>
  </React.StrictMode>
);
