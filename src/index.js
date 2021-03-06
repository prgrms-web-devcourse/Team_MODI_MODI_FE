import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@mui/material';

import Router from './Router';
import { AuthProvider } from 'contexts/authContext';
import { OttInfoProvider } from 'contexts/OttInfoProvider';
import { CustomThemeProvider } from 'contexts/CustomThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <AuthProvider>
        <OttInfoProvider>
          <CssBaseline />
          <Router />
        </OttInfoProvider>
      </AuthProvider>
    </CustomThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
