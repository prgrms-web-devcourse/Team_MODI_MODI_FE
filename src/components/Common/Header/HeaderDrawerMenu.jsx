import { useCallback } from 'react';
import PropTypes from 'prop-types';

import { ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';

import { useCustomThemeDispatch } from 'contexts/CustomThemeProvider';
import { useNavigate } from 'react-router-dom';
import { useAuthDispatch } from 'contexts/authContext';

const HeaderDrawerMenu = ({ open, anchorEl, theme, onCloseMenu }) => {
  const { onToggleTheme } = useCustomThemeDispatch();
  const navigate = useNavigate();
  const { onLogout } = useAuthDispatch();

  const handleNavigateMyPage = useCallback(() => {
    navigate && navigate(`/user`);
    onCloseMenu && onCloseMenu();
  }, [navigate, onCloseMenu]);

  const handleToggleTheme = useCallback(() => {
    onToggleTheme && onToggleTheme();
  }, [onToggleTheme]);

  const handleLogout = useCallback(() => {
    onLogout && onLogout();
    onCloseMenu && onCloseMenu();
    navigate('/');
  }, [onLogout, onCloseMenu, navigate]);

  return (
    <Menu
      id="menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onCloseMenu}
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
          {theme.palette.mode === 'dark' ? '밝은 테마' : '어두운 테마'}
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
  );
};

HeaderDrawerMenu.propTypes = {
  open: PropTypes.bool,
  anchorEl: PropTypes.element,
  theme: PropTypes.object,
  onCloseMenu: PropTypes.func,
};

export default HeaderDrawerMenu;
