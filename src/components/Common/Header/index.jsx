import { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box } from '@mui/material';
import HeaderTabs from './HeaderTabs.jsx';
import HeaderFab from './HeaderFab.jsx';
import Logo from 'components/Common/Logo.jsx';

const Header = ({ user, curPage }) => {
  const [isLogin, setIslogin] = useState(user);
  const [thisPage, setThisPage] = useState(curPage);

  return (
    <AppBar
      sx={{
        background: `${thisPage === 'main' ? 'transparent' : '#fff'}`,
        height: 56,
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        padding: '0 20px',
        boxShadow: `${
          thisPage === 'main' ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.15)'
        }`,
        position: 'fixed',
      }}
    >
      <Logo color={thisPage === 'main' ? 'white' : 'color'} />
      <Box
        sx={{
          height: 56,
          display: 'flex',
          flexFlow: 'row nowrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HeaderTabs curPage={thisPage} />
        <HeaderFab user={isLogin} curPage={thisPage} />
      </Box>
    </AppBar>
  );
};

Header.defaultProps = {
  user: false,
  curPage: 'main',
};

Header.propTypes = {
  user: PropTypes.bool,
  curPage: PropTypes.string,
};

export default Header;
