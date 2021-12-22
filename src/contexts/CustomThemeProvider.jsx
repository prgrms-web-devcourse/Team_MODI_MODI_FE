import { ThemeProvider } from '@emotion/react';
import { useState, useCallback, useMemo, useContext } from 'react';
import { createContext } from 'react';
import lightTheme from 'styles/theme';
import darkTheme from 'styles/darkTheme';
import PropTypes from 'prop-types';
import useStorage from 'hooks/useStorage';

const CustomThemeDispatch = createContext(null);

export const CustomThemeProvider = ({ children }) => {
  const [storedThemeMode, setStoreThemeMode] = useStorage(
    'mode',
    'light',
    'local',
  );
  const [mode, setMode] = useState(storedThemeMode);

  const handleToggleTheme = useCallback(() => {
    setMode(prevMode => {
      const nextMode = prevMode === 'light' ? 'dark' : 'light';
      setStoreThemeMode(nextMode);

      return nextMode;
    });
  }, [setStoreThemeMode]);

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
