import { Link, useLocation } from 'react-router-dom';
import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box } from '@mui/material';
import HeaderTabs from './HeaderTabs.jsx';
import HeaderFab from './HeaderFab.jsx';
import Logo from 'components/Common/Logo.jsx';

const Header = ({ user }) => {
  const location = useLocation();
  const [isLogin, setIslogin] = useState(user);
  const isMainPage = useMemo(() => location.pathname === '/', [location]);
  const isLoginPage = useMemo(() => location.pathname === '/login', [location]);

  return (
    !isLoginPage && (
      <AppBar
        sx={{
          background: `${isMainPage ? 'transparent' : '#fff'}`,
          height: 56,
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'space-between',
          padding: '0 20px',
          boxShadow: `${isMainPage ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.15)'}`,
          position: 'fixed',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Logo color={isMainPage ? false : true} />
        </Link>
        <Box
          sx={{
            height: 56,
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <HeaderTabs isMainPage={isMainPage} />
          <HeaderFab user={isLogin} isMainPage={isMainPage} />
        </Box>
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
