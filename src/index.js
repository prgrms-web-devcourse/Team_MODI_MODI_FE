import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import TestPage from 'pages/TestPage';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <App/> */}
      <TestPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
