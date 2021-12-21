import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import theme from 'styles/theme.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar, Box, Container, IconButton } from '@mui/material';
import HeaderTabs from './HeaderTabs.jsx';
import HeaderFab from './HeaderFab.jsx';
import Logo from 'components/Common/Logo.jsx';
import { useAuthState } from 'contexts/authContext.jsx';
import { useCustomThemeDispatch } from 'contexts/CustomThemeProvider.jsx';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ user }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuthState();
  const isMainPage = useMemo(() => location.pathname === '/', [location]);
  const isLoginPage = useMemo(() => location.pathname === '/login', [location]);
  const mdDownMatches = useMediaQuery(theme.breakpoints.down('md'));
  const { onToggleTheme } = useCustomThemeDispatch();

  return (
    !isLoginPage && (
      <AppBar
        sx={{
          backgroundColor: `${
            isMainPage ? 'transparent' : 'background.pageContent'
          }`,
          height: mdDownMatches ? 56 : 72,
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
          <IconButton onClick={() => onToggleTheme()}>
            <Brightness7Icon />
          </IconButton>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <HeaderTabs
              isMainPage={isMainPage}
              tabSize={mdDownMatches ? 56 : 72}
            />
            <HeaderFab user={isLoggedIn} isMainPage={isMainPage} />
          </Box>
        </Container>
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
