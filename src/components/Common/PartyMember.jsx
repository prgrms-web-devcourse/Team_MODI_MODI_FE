import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
import { AirlineSeatReclineExtra } from '@mui/icons-material';
import crown from 'assets/crown.png';

const PartyMember = ({
  isWaiting = true,
  username = '',
  leader = false,
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
          {leader && (
            <img
              alt="crown"
              src={crown}
              style={{
                marginTop: 1,
                marginRight: 1,
                width: 10,
              }}
            />
          )}
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
  leader: PropTypes.bool,
  size: PropTypes.string,
  hasText: PropTypes.bool,
  fontSize: PropTypes.string,
};

export default PartyMember;
