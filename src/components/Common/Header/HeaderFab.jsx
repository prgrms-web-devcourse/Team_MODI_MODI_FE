import PropTypes from 'prop-types';
import { Fab } from '@mui/material';
import { LoginRounded, Person } from '@mui/icons-material';

const HeaderFab = ({ user, isMainPage, onClickMenu, onClickLoginButton }) => {
  return (
    <Fab
      disableRipple={true}
      aria-label={user ? 'User Page' : 'Login'}
      color={isMainPage ? 'default' : 'secondary'}
      onClick={user ? onClickMenu : onClickLoginButton}
      sx={{
        width: 32,
        height: 32,
        maxHeight: 32,
        minHeight: 32,
        ml: 1.5,
        boxShadow: 'none',
      }}
    >
      {user ? <Person sx={iconSx} /> : <LoginRounded sx={iconSx} />}
    </Fab>
  );
};

const iconSx = {
  color: 'white',
  width: 24,
  height: 24,
};

HeaderFab.defaultProps = {
  user: false,
  isMainPage: false,
};

HeaderFab.propTypes = {
  user: PropTypes.bool,
  isMainPage: PropTypes.bool,
  userId: PropTypes.number,
  onClickMenu: PropTypes.func,
  onClickLoginButton: PropTypes.func,
};

export default HeaderFab;
