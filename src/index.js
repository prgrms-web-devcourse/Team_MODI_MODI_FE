import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
//import TestPage from 'pages/TestPage';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      {/* <TestPage /> */}
    </ThemeProvider>
  </React.StrictMode>,
=======

import { ThemeProvider } from '@mui/material';
import theme from 'styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
>>>>>>> b9b33918042f170e084cf9542c6f85c0744a7294
  document.getElementById('root'),
);
