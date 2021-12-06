import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import TestPageDorr from 'pages/testPages/TestPageDorr';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <App /> */}
      <TestPageDorr />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
