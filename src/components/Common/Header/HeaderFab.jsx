import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import { LoginRounded, Person } from '@mui/icons-material';

const HeaderFab = ({ user, curPage, userId }) => {
  return (
    <Fab
      disableRipple={true}
      aria-label="login"
      component={user ? Link : 'button'}
      to={user ? `user/${userId}` : null}
      color={curPage === 'main' ? 'default' : 'secondary'}
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
  curPage: 'main',
};

HeaderFab.propTypes = {
  user: PropTypes.bool,
  curPage: PropTypes.string,
  userId: PropTypes.number,
};

export default HeaderFab;
