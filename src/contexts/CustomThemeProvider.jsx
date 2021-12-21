import PropTypes from ' prop-types';
import { ThemeProvider } from '@mui/styles';
import { useState, useCallback, useMemo, useContext } from 'react';
import { createContext } from 'react';
import theme from 'styles/theme';
import darkTheme from 'styles/darkTheme';

const CustomThemeDispatch = createContext(null);

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const handleToggleTheme = useCallback(() => {
    setMode(prevMode => (prevMode === 'light' ? 'light' : 'dark'));
  }, []);

  const customTheme = useMemo(
    () => (mode === 'light' ? theme : darkTheme),
    [mode],
  );

  const actions = useMemo(
    () => ({
      onToggleTheme: handleToggleTheme,
    }),
    [handleToggleTheme],
  );

  return (
    <ThemeProvider theme={customTheme}>
      <CustomThemeDispatch.Provider value={actions}>
        {children}
      </CustomThemeDispatch.Provider>
    </ThemeProvider>
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
