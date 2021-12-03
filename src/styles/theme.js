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
      black: '191A20',
      main: '#BBBBBB',
      light: '#EEEEEE',
      semilight: 'F7F8FA',
      white: '#FFFFFF',
    },
    text: {
      primary: '#343434',
      secondary: '#666666',
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
});

export default theme;
