import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Typography, Box } from '@mui/material';
import crown from 'assets/crown.png';

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
      <Typography variant="baseB" color="text.primary" align="left">
        {ottName}
      </Typography>
      {isLeader && (
        <img
          alt="crown"
          src={crown}
          style={{
            position: 'absolute',
            right: -18,
            bottom: 4,
            width: 15,
          }}
        />
      )}
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
