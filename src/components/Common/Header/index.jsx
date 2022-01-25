import { Link, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar, Box, Container, Divider, IconButton } from '@mui/material';
import HeaderTabs from './HeaderTabs.jsx';
import HeaderFab from './HeaderFab.jsx';
import Logo from 'components/Common/Logo.jsx';
import { useAuthState } from 'contexts/authContext.jsx';
import { useCustomThemeDispatch } from 'contexts/CustomThemeProvider.jsx';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useTheme } from '@emotion/react';
import Notice from 'components/Common/Notice.jsx';

const Header = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuthState();
  const isMainPage = useMemo(() => location.pathname === '/', [location]);
  const isLoginPage = useMemo(() => location.pathname === '/login', [location]);
  const theme = useTheme();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down('md'));
  const { onToggleTheme } = useCustomThemeDispatch();
  const [state, setState] = useState({
    mobileView: false,
  });
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState(prevState => ({ ...prevState, mobileView: true }))
        : setState(prevState => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return (
    !isLoginPage && (
      <AppBar
        sx={{
          backgroundColor: `${
            isMainPage ? 'transparent' : 'background.pageContent'
          }`,
          // height: mdDownMatches ? 56 : 72,
          boxShadow: `${isMainPage ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.15)'}`,
          position: 'fixed',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            height: '100%',
            mt: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Logo
                color={isMainPage ? false : true}
                size={mdDownMatches ? 56 : 72}
              />
            </Link>
            <IconButton
              sx={{
                backgroundColor: 'transparent',
                color: theme.palette.mode === 'dark' ? '#FFEE94' : '#5D7167',
              }}
              onClick={() => onToggleTheme()}
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!mobileView && (
              <HeaderTabs
                isMainPage={isMainPage}
                tabSize={mdDownMatches ? 56 : 72}
                mode={theme.palette.mode}
              />
            )}
            <Notice badgeContent={10} isMainPage={isMainPage} />
            <HeaderFab user={isLoggedIn} isMainPage={isMainPage} />
          </Box>
        </Container>
        {mobileView && (
          <Container
            sx={{
              mt: -1.5,
            }}
          >
            <Divider
              sx={{
                mt: 2,
                ml: -3,
                width: '120%',
                borderColor: `${isMainPage ? '#BBBBBB' : '#EEEEEE'}`,
              }}
            />
            <HeaderTabs
              isMainPage={isMainPage}
              tabSize={mdDownMatches ? 56 : 72}
              mode={theme.palette.mode}
            />
          </Container>
        )}
      </AppBar>
    )
  );
};

Header.defaultProps = {
  user: false,
};

Header.propTypes = {
  user: PropTypes.bool,
  curPage: PropTypes.string,
};

export default Header;
