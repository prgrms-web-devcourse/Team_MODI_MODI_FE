import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField, Typography } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';
import { MobileDatePicker } from '@mui/lab';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { dateFormater } from 'utils/formatting';

const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 56px;
  }
`;

const PartyStartDate = ({ initialStartDate, onSelectStartDate }) => {
  const [startDate, setStartDate] = useState(initialStartDate);

  const handleChange = newstartDate => {
    setStartDate(newstartDate);
    onSelectStartDate(newstartDate);
  };

  return (
    <Box
      sx={{
        p: 1,
        m: 1,
      }}
    >
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
          renderInput={params => <StyledTextField {...params} />}
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
