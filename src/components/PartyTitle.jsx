import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

import { Avatar, Typography } from '@mui/material';
import OttLogo from './OttLogo';

const PartyTitle = ({ ottName }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '80px',
      }}
    >
      <OttLogo ottName={ottName} size={72} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ml: '10px',
        }}
      >
        <Typography variant="microB" color="text.secondary">
          디즈니 플러스
        </Typography>
        <Typography variant="baseB" color="text.primary">
          스탠다드
        </Typography>
      </Box>

      <Box
        sx={{
          ml: 'auto',
          textAlign: 'right',
        }}
      >
        <Typography variant="microB" color="text.secondary" component="div">
          월 3,500P (2개월)
        </Typography>

        <MonetizationOnIcon
          sx={{
            fontSize: 16,
            verticalAlign: 'text-bottom',
          }}
          color="primary"
        />
        <Typography variant="micro" component="span">
          총{' '}
        </Typography>
        <Typography variant="mediumB" component="span">
          7,000
        </Typography>
        <Typography variant="micro" component="span">
          {' '}
          P
        </Typography>
      </Box>
    </Box>
  );
};

export default PartyTitle;

PartyTitle.propTypes = {
  ottName: PropTypes.string.isRequired,
};
