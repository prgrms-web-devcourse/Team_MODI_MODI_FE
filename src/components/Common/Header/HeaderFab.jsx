import PropTypes from 'prop-types';
import { Fab } from '@mui/material';
import theme from 'styles/theme';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PersonIcon from '@mui/icons-material/Person';

const HeaderFab = ({ user, curPage }) => {
  return (
    <Fab
      disableRipple={true}
      aria-label="login"
      sx={{
        width: 28,
        height: 28,
        maxHeight: 28,
        minHeight: 28,
        ml: 1.5,
        backgroundColor: `${
          curPage === 'main'
            ? theme.palette.modiGray.main
            : theme.palette.secondary.main
        }`,
      }}
    >
      {user ? <PersonIcon sx={iconSx} /> : <LoginRoundedIcon sx={iconSx} />}
    </Fab>
  );
};

const iconSx = {
  color: 'white',
  width: 20,
  height: 20,
};

HeaderFab.defaultProps = {
  user: false,
  curPage: 'main',
};

HeaderFab.propTypes = {
  user: PropTypes.bool,
  curPage: PropTypes.string,
};

export default HeaderFab;
