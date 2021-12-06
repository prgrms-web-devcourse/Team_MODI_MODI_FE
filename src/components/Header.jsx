/* eslint-disable no-unused-vars*/
import { AppBar, Tabs, Tab, Box, Fab } from '@mui/material';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { styled, createTheme } from '@mui/system';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Logo from './Logo.js';

const LinkTab = props => {
  return (
    <Tab
      onClick={e => {
        e.preventDefault();
      }}
      {...props}
    />
  );
};

const Header = ({ bg, user }) => {
  const [islogin, setIslogin] = useState(user);

  return (
    <NavBar>
      <Logo />
      <StyledBox>
        <Tabs value="value" indicatorColor="secondary" aria-label="nav tabs">
          <StyledTab label="파티찾기" href="/#" />
          <StyledTab label="파티만들기" href="/#" />
        </Tabs>
        <Fab
          aria-label="login"
          color="secondary"
          size="small"
          sz={{
            width: 28,
            height: 28,
            borderRadius: 14,
          }}
        >
          <LoginRoundedIcon sx={{ color: 'white' }} />
        </Fab>
      </StyledBox>
    </NavBar>
  );
};

const NavBar = styled(AppBar)`
  background: ${props => (props.bg ? '#fff' : 'transparent')};
  height: 56px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: ${props => (props.bg ? '0 1px 2px rgba(0, 0, 0, 0.15)' : 'none')};
  position: initial;
`;

const StyledBox = styled(Box)`
  height: 56px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const StyledTab = styled(LinkTab)`
  min-height: 56px;
  line-height: 1;
  min-width: 70px;
  padding: 0;
`;

// const StyledIconButton = styled(IconButton)`
//   width: 28px;
//   height: 28px;
//   border-radius: 14px;
// `;

Header.defaultProps = {
  bg: false,
  user: false,
};

Header.propTypes = {
  bg: PropTypes.bool,
  user: PropTypes.bool,
};

export default Header;
