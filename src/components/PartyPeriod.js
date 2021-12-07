import { Slider, Box, Typography } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';

const PartyPeriod = ({ initialPeriod, onSelectPeriod }) => {
  const [period, setPeriod] = useState(initialPeriod);
  const marks = [];
  for (let i = 1; i < 13; i++) {
    marks.push({
      value: i,
      label: `${i}`,
    });
  }

  const handleDragStop = (event, value) => {
    setPeriod(value);
    onSelectPeriod(value);
  };

  return (
    <Box
      sx={{
        width: '100%',
        p: 1,
        m: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="mediumB">기간</Typography>
        <Typography variant="large">{period} 개월</Typography>
      </Box>
      <Slider
        aria-label="Party Period"
        defaultValue={1}
        value={period}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        min={1}
        max={12}
        onChangeCommitted={handleDragStop}
      />
    </Box>
  );
};

PartyPeriod.propTypes = {
  initialPeriod: PropTypes.number,
  onSelectPeriod: PropTypes.func,
};

export default PartyPeriod;
