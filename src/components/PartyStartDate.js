import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { TextField } from '@mui/material';
import { useState } from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 56px;
  }
`;

const PartyStartDate = () => {
  const [value, setValue] = useState(new Date());

  const handleChange = newValue => {
    const dateFormat = dayjs(newValue).format('YYYY-MM-DD');
    setValue(dateFormat);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        inputFormat="yyyy/MM/dd"
        mask={'____/__/__'}
        value={value}
        onChange={handleChange}
        renderInput={params => <StyledTextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default PartyStartDate;
