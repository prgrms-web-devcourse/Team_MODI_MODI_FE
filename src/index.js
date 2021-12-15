import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import { CssBaseline } from '@mui/material';

import Router from './Router';
import { AuthProvider } from 'contexts/authContext';
import { OttInfoProvider } from 'contexts/OttInfoProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <OttInfoProvider>
          <CssBaseline />
          <Router />
        </OttInfoProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
