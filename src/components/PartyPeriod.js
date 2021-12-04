import { Slider, Box, Typography } from '@mui/material';
import { useState } from 'react';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
  {
    value: 9,
    label: '9',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 11,
    label: '11',
  },
  {
    value: 12,
    label: '12',
  },
];

const PartyPeriod = () => {
  const [period, setPeriod] = useState(1);

  const handleDragStop = (event, value) => {
    setPeriod(value);
  };

  return (
    <div>
      <Box
        sx={{
          width: 300,
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
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          min={1}
          max={12}
          onChangeCommitted={handleDragStop}
        />
      </Box>
    </div>
  );
};

export default PartyPeriod;
