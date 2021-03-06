import PropTypes from 'prop-types';
import { Slider, Box, Typography } from '@mui/material';

const PartyPeriod = ({ period, onSelectPeriod }) => {
  const marks = [];
  for (let i = 1; i < 13; i++) {
    marks.push({
      value: i,
      label: `${i}`,
    });
  }

  const handleDragStop = (event, value) => {
    onSelectPeriod(value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="mediumB">기간</Typography>
        <Typography variant="mediumB">
          <Typography variant="large">{period}</Typography> 개월
        </Typography>
      </Box>
      <Slider
        aria-label="Party Period"
        defaultValue={1}
        value={period}
        valueLabelDisplay="auto"
        step={1}
        marks={marks}
        min={1}
        max={12}
        onChange={handleDragStop}
      />
    </Box>
  );
};

PartyPeriod.propTypes = {
  period: PropTypes.number,
  onSelectPeriod: PropTypes.func,
};

export default PartyPeriod;
