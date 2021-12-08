import { AirlineSeatReclineExtra } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const PartyMember = ({
  isWaiting = true,
  username = '',
  size = 'medium',
  haveText = true,
  fontSize = 'micro',
}) => {
  return (
    <Box
      fontSize={size}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        filter: `grayscale(${isWaiting ? 100 : 0}%)`,
        width: '25%',
      }}
    >
      <AirlineSeatReclineExtra color="secondary" />
      {haveText ? (
        <Typography
          variant={fontSize}
          color={isWaiting ? 'text.disabled' : 'text.secondary'}
        >
          {isWaiting ? '모집 대기중' : username}
        </Typography>
      ) : (
        ''
      )}
    </Box>
  );
};

PartyMember.propTypes = {
  isWaiting: PropTypes.bool,
  username: PropTypes.string,
  size: PropTypes.string,
  haveText: PropTypes.bool,
  fontSize: PropTypes.string,
};

export default PartyMember;
