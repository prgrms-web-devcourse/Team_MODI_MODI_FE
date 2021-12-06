import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

import logo from 'assets/logo-main.svg';
import { Avatar, Typography } from '@mui/material';

const ottLogos = {
  넷플릭스: logo,
  '디즈니 플러스': logo,
  웨이브: logo,
};

const PartyTitle = ({ ottName }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '80px',
      }}
    >
      <Avatar
        alt={`${ottName}-logo`}
        sx={{
          width: 72,
          height: 72,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        }}
        src={logo}
      />
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            verticalAlign: 'baseline',
          }}
        >
          <MonetizationOnIcon sx={{ fontSize: 16 }} color="primary" />
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
    </Box>
  );
};

export default PartyTitle;

PartyTitle.propTypes = {
  ottName: PropTypes.string.isRequired,
};
