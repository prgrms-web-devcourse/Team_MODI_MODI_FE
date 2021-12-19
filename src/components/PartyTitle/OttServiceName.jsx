import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Typography, Box, Chip } from '@mui/material';
import crown from 'assets/crown.png';
import { RuleToggle } from 'components/Common';

const OttServiceName = ({ ottName, ottGrade, isLeader }) => {
  const OttServiceNameSx = useMemo(
    () => ({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      ml: '10px',
    }),
    [],
  );

  return (
    <Box sx={OttServiceNameSx}>
      <Typography variant="microB" color="text.secondary" align="left">
        {ottGrade}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="baseB" color="text.primary" align="left">
          {ottName}
        </Typography>
        {isLeader && (
          <Chip
            color="error"
            label="파티장"
            variant="contained"
            size="small"
            sx={{
              ml: 0.5,
              height: 20,
              fontSize: '12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default OttServiceName;

OttServiceName.propTypes = {
  ottName: PropTypes.oneOf([
    '넷플릭스',
    '왓챠',
    '웨이브',
    '티빙',
    '디즈니 플러스',
    '라프텔',
    '쿠팡 플레이',
    '아마존 프라임',
    '',
  ]).isRequired,
  ottGrade: PropTypes.string.isRequired,
  isLeader: PropTypes.bool,
};
