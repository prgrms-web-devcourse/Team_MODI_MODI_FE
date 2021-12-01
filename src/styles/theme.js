import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BBCC4B',
      dark: '#AEBF3F',
    },
    secondary: {
      main: '#87CCCD',
    },
    thirdary: {
      main: '#FBEDA4',
    },
    modiGray: {
      light: '#EEEEEE',
      main: '#BBBBBB',
      dark: '#666666',
    },
    text: {
      primary: '#191A20',
      secondary: '#343434',
    },
    action: {
      active: '#BBBBBB',
    },
    error: {
      main: '#E55E70',
    },
  },
  typography: {
    fontFamily: ['Spoqa Han Sans Neo', 'sans-serif'].join(','),
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    h3: {
      fontSize: 20,
      fontWeight: 400,
    },
    h4: {
      fontSize: 18,
      fontWeight: 500,
    },
    h5: {
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 400,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
});

export default theme;
