import PropTypes from 'prop-types';
import { TextField, Typography, InputAdornment, Box } from '@mui/material';
import { MobileDatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { calculateNextDate } from 'utils/calculateDate';

const PartyStartDate = ({
  startDate,
  onSelectStartDate,
  checkSelectStartDate,
}) => {
  const nextDate = calculateNextDate();
  const handleChange = newstartDate => {
    onSelectStartDate(newstartDate, nextDate < newstartDate);
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
          minDate={calculateNextDate()}
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
      {!checkSelectStartDate && (
        <Typography sx={{ ml: 1 }} color="error" variant="smallB">
          시작일은 내일 날짜부터 선택할 수 있습니다.
        </Typography>
      )}
    </Box>
  );
};

PartyStartDate.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  onSelectStartDate: PropTypes.func,
  checkSelectStartDate: PropTypes.bool,
};

export default PartyStartDate;
