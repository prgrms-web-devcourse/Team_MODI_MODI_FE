import { TextField, Box } from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import { useState } from 'react';

const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 56px;
  }
`;

const SharedInfoForm = ({
  sharedId,
  sharedPassword,
  sharedPasswordCheck,
  onChangeInfo,
}) => {
  const [sharedInfo, setSharedInfo] = useState({
    sharedId,
    sharedPassword,
    sharedPasswordCheck,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setSharedInfo({
      ...sharedInfo,
      [name]: value,
    });
    onChangeInfo({
      name,
      value,
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 1,
        }}
        onChange={handleChange}
      >
        <StyledTextField
          sx={{
            m: 1,
            width: 300,
          }}
          required
          name="sharedId"
          id="sharedId"
          label="아이디"
          value={sharedId}
          variant="outlined"
        />
        <StyledTextField
          sx={{
            m: 1,
            width: 300,
          }}
          required
          name="sharedPassword"
          id="sharedPassword"
          label="비밀번호"
          value={sharedPassword}
          variant="outlined"
          type="password"
        />
        <StyledTextField
          sx={{
            m: 1,
            width: 300,
          }}
          required
          name="sharedPasswordCheck"
          id="sharedPasswordCheck"
          label="비밀번호 확인"
          value={sharedPasswordCheck}
          variant="outlined"
          type="password"
        />
      </Box>
    </Box>
  );
};

SharedInfoForm.propTypes = {
  sharedId: PropTypes.string,
  sharedPassword: PropTypes.string,
  sharedPasswordCheck: PropTypes.string,
  onChangeInfo: PropTypes.func,
};

export default SharedInfoForm;
