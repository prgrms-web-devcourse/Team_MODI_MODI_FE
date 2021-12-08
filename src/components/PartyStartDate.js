import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField, Typography, InputAdornment } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useState } from 'react';
import { MobileDatePicker } from '@mui/lab';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const PartyStartDate = ({ initialStartDate, onSelectStartDate }) => {
  const [startDate, setStartDate] = useState(initialStartDate);

  const handleChange = newstartDate => {
    setStartDate(newstartDate);
    onSelectStartDate(newstartDate);
  };

  return (
    <Box sx={{ marginBottom: 7 }}>
      <Typography
        sx={{
          marginBottom: 2,
        }}
        variant="mediumB"
        component="h3"
      >
        시작일
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          inputFormat="yyyy/MM/dd"
          mask={'____/__/__'}
          value={startDate}
          disableCloseOnSelect={false}
          minDate={new Date()}
          onChange={handleChange}
          renderInput={params => (
            <TextField
              {...params}
              fullWidth
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CalendarTodayIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
};

PartyStartDate.propTypes = {
  initialStartDate: PropTypes.instanceOf(Date),
  onSelectStartDate: PropTypes.func,
};

export default PartyStartDate;
