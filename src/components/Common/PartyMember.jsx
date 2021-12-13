import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
import { AirlineSeatReclineExtra } from '@mui/icons-material';

const PartyMember = ({
  isWaiting = true,
  username = '',
  size = 'medium',
  hasText = true,
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
      {hasText ? (
        <Typography
          sx={{ wordBreak: 'keep-all' }}
          variant={fontSize}
          color={isWaiting ? 'text.disabled' : 'text.secondary'}
        >
          {isWaiting ? '모집 중' : username}
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
  hasText: PropTypes.bool,
  fontSize: PropTypes.string,
};

export default PartyMember;
