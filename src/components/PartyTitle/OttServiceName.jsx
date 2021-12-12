import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Typography, Box } from '@mui/material';

const OttServiceName = ({ ottName, ottGrade }) => {
  const OttServiceNameSx = useMemo(
    () => ({
      display: 'flex',
      flexDirection: 'column',
      ml: '10px',
    }),
    [],
  );

  return (
    <Box sx={OttServiceNameSx}>
      <Typography variant="microB" color="text.secondary" align="left">
        {ottName}
      </Typography>
      <Typography variant="baseB" color="text.primary" align="left">
        {ottGrade}
      </Typography>
    </Box>
  );
};

export default OttServiceName;

OttServiceName.propTypes = {
  ottName: PropTypes.oneOf(['넷플릭스', '왓챠', '디즈니 플러스', '웨이브'])
    .isRequired,
  ottGrade: PropTypes.string.isRequired,
};
