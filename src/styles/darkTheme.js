import { createTheme } from '@mui/material';

const darkTheme = createTheme({
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
    mode: 'dark',
    primary: {
      main: '#9fcea1',
      dark: '#709d72',
      light: '#d1ffd2',
      contrastText: 'rgba(0,0,0, 0.87)',
    },
    secondary: {
      main: '#b2ebf2',
      dark: '#81b9bf',
      light: '#e5ffff',
      contrastText: 'rgba(0,0,0, 0.87)',
    },
    thirdary: {
      main: '#FBEDA4',
    },
    divider: '#EEEEEE',
    background: {
      default: '#262626',
      paper: '#343434',
      pageContent: '#202020',
      mainVisual: '#181818',
      myPartyMain: '#181818',
    },
    modiGray: {
      black: '#191A20',
      main: '#666666',
      light: '#EEEEEE',
      semilight: '#F7F8FA',
      white: '#FFFFFF',
      contrastText: '#191A20',
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, .7)',
      disabled: 'rgba(255, 255, 255, .5)',
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

export default darkTheme;
