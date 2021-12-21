import { ThemeProvider } from '@emotion/react';
import { useState, useCallback, useMemo, useContext } from 'react';
import { createContext } from 'react';
import lightTheme from 'styles/theme';
import darkTheme from 'styles/darkTheme';
import PropTypes from 'prop-types';

const CustomThemeDispatch = createContext(null);

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const handleToggleTheme = useCallback(() => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = mode === 'light' ? lightTheme : darkTheme;

  const actions = useMemo(
    () => ({
      onToggleTheme: handleToggleTheme,
    }),
    [handleToggleTheme],
  );

  return (
    <CustomThemeDispatch.Provider value={actions}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeDispatch.Provider>
  );
};

CustomThemeProvider.propTypes = {
  children: PropTypes.node,
};

export const useCustomThemeDispatch = () => {
  const dispatch = useContext(CustomThemeDispatch);

  if (!dispatch) {
    throw new Error(`Cannot find OttInfoDispatch`);
  }

  return dispatch;
};
