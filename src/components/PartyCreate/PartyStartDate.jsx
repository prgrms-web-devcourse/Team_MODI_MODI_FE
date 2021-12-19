import PropTypes from 'prop-types';
import { TextField, Typography, InputAdornment, Box } from '@mui/material';
import { MobileDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const PartyStartDate = ({ startDate, onSelectStartDate }) => {
  const handleChange = newstartDate => {
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
  startDate: PropTypes.instanceOf(Date),
  onSelectStartDate: PropTypes.func,
};

export default PartyStartDate;
