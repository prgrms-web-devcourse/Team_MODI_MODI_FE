import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import { LoginRounded, Person } from '@mui/icons-material';

const HeaderFab = ({ user, isMainPage, userId }) => {
  return (
    <Fab
      disableRipple={true}
      aria-label={user ? 'User Page' : 'Login'}
      component={Link}
      to={user ? `/user` : '/login'}
      color={isMainPage ? 'default' : 'secondary'}
      sx={{
        width: 28,
        height: 28,
        maxHeight: 28,
        minHeight: 28,
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
  width: 18,
  height: 18,
};

HeaderFab.defaultProps = {
  user: false,
  isMainPage: false,
};

HeaderFab.propTypes = {
  user: PropTypes.bool,
  isMainPage: PropTypes.bool,
  userId: PropTypes.number,
};

export default HeaderFab;
