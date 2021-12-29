import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMemo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  AppBar,
  Box,
  Container,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import HeaderTabs from './HeaderTabs.jsx';
import HeaderFab from './HeaderFab.jsx';
import Logo from 'components/Common/Logo.jsx';
import { useAuthState } from 'contexts/authContext.jsx';
import { useCustomThemeDispatch } from 'contexts/CustomThemeProvider.jsx';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useTheme } from '@emotion/react';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthDispatch } from 'contexts/authContext.jsx';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthState();
  const { onLogout } = useAuthDispatch();
  const isMainPage = useMemo(() => location.pathname === '/', [location]);
  const isLoginPage = useMemo(() => location.pathname === '/login', [location]);
  const theme = useTheme();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down('md'));
  const { onToggleTheme } = useCustomThemeDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = useMemo(() => !!anchorEl, [anchorEl]);

  const handleOpenMenu = useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleNavigateMyPage = useCallback(() => {
    navigate && navigate(`/user`);
    handleCloseMenu();
  }, [navigate, handleCloseMenu]);

  const handleToggleTheme = useCallback(() => {
    onToggleTheme && onToggleTheme();
  }, [onToggleTheme]);

  const handleLogout = useCallback(() => {
    onLogout && onLogout();
    handleCloseMenu();
    navigate('/');
  }, [onLogout, handleCloseMenu, navigate]);

  const handleNavigateLoginPage = useCallback(() => {
    navigate('/login');
  }, [navigate]);

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
            <HeaderTabs
              isMainPage={isMainPage}
              tabSize={mdDownMatches ? 56 : 72}
              mode={theme.palette.mode}
            />
            <Box
              sx={{
                display: 'flex',
              }}
            >
              <HeaderFab
                user={isLoggedIn}
                isMainPage={isMainPage}
                onClickMenu={handleOpenMenu}
                onClickLoginButton={handleNavigateLoginPage}
              />
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem
                  onClick={handleNavigateMyPage}
                  sx={{
                    background: 'transparent',
                  }}
                >
                  <ListItemIcon />
                  <ListItemText>마이 페이지</ListItemText>
                </MenuItem>

                <MenuItem
                  onClick={handleToggleTheme}
                  sx={{
                    background: 'transparent',
                  }}
                >
                  <ListItemIcon>
                    {theme.palette.mode === 'dark' ? (
                      <Brightness7Icon />
                    ) : (
                      <Brightness4Icon />
                    )}
                  </ListItemIcon>
                  <ListItemText>
                    {theme.palette.mode === 'dark'
                      ? '밝은 테마'
                      : '어두운 테마'}
                  </ListItemText>
                </MenuItem>

                <MenuItem
                  onClick={handleLogout}
                  sx={{
                    background: 'transparent',
                  }}
                >
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText>로그아웃</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
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
