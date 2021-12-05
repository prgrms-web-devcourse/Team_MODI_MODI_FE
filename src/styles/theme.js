import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#BBCC4B',
      dark: '#AEBF3F',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#87CCCD',
      contrastText: '#ffffff',
    },
    thirdary: {
      main: '#FBEDA4',
    },
    divider: '#EEEEEE',
    background: {
      default: '#F7F8FA',
    },
    modiGray: {
      black: '#191A20',
      main: '#BBBBBB',
      light: '#EEEEEE',
      semilight: '#F7F8FA',
      white: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    text: {
      primary: '#343434',
      secondary: '#666666',
      disabled: '#BBBBBB',
    },
    action: {
      active: '#BBBBBB',
    },
    error: {
      main: '#E55E70',
    },
  },
  typography: {
    fontFamily: [
      'Pretendard',
      '-apple-system',
      'BlinkMacSystemFont',
      'system-ui',
      'Roboto',
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'sans-serif',
    ].join(','),
    micro: {
      fontSize: 12,
      fontWeight: 400,
    },
    microB: {
      fontSize: 12,
      fontWeight: 700,
    },
    small: {
      fontSize: 14,
      fontWeight: 400,
    },
    smallB: {
      fontSize: 14,
      fontWeight: 700,
    },
    base: {
      fontSize: 16,
      fontWeight: 400,
    },
    baseB: {
      fontSize: 16,
      fontWeight: 700,
    },
    medium: {
      fontSize: 18,
      fontWeight: 400,
    },
    mediumB: {
      fontSize: 16,
      fontWeight: 700,
    },
    large: {
      fontSize: 22,
      fontWeight: 700,
    },
    visual: {
      fontSize: 26,
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '22px / 50%',
        },
        sizeSmall: {
          borderRadius: 16,
        },
        sizeMedium: {
          borderRadius: 18,
        },
        sizeLarge: {
          borderRadius: 21,
        },
      },
    },
  },
});

export default theme;
