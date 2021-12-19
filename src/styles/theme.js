import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
  palette: {
    primary: {
      main: '#B2CC16',
      dark: '#AEBF3F',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#67CFCC',
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
      lineHeight: 1.333,
      letterSpacing: '-0.05em',
    },
    microB: {
      fontSize: 12,
      fontWeight: 700,
      lineHeight: 1.333,
      letterSpacing: '-0.05em',
    },
    small: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.214,
      letterSpacing: '-0.04em',
    },
    smallB: {
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.214,
      letterSpacing: '-0.04em',
    },
    base: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.222,
      letterSpacing: '-0.04em',
    },
    baseB: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.222,
      letterSpacing: '-0.04em',
    },
    medium: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: 1.222,
      letterSpacing: '-0.04em',
    },
    mediumB: {
      fontSize: '1.125rem',
      fontWeight: 700,
      lineHeight: 1.222,
      letterSpacing: '-0.04em',
    },
    large: {
      fontSize: '1.375rem',
      fontWeight: 700,
      lineHeight: 1.222,
      letterSpacing: '-0.03em',
    },
    visual: {
      fontSize: '1.625rem',
      fontWeight: 700,
      lineHeight: 1.222,
      letterSpacing: '-0.03em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar': {
            width: 7,
          },
          '&::-webkit-scrollbar-track': {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#bbbbbb',
            borderRadius: 4,
            backgroundClip: 'padding-box',
            border: '1px solid transparent',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '0 15px',
        },
        disableGutters: {
          padding: 0,
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '2rem',
        },
        input: {
          padding: '0.929em 1.429em',
        },
      },
    },
  },
});

export default theme;
