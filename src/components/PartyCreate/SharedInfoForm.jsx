import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Box } from '@mui/material';

const SharedInfoForm = ({
  sharedId,
  sharedPassword,
  sharedPasswordCheck,
  onChangeInfo,
}) => {
  const [isError, setIsError] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    onChangeInfo({
      name,
      value,
    });
  };

  useEffect(() => {
    if (sharedPassword !== sharedPasswordCheck) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [sharedPassword, sharedPasswordCheck]);

  return (
    <Box>
      <Box onChange={handleChange}>
        <TextField
          fullWidth
          required
          name="sharedId"
          id="sharedId"
          label="아이디"
          value={sharedId}
          variant="outlined"
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          required
          name="sharedPassword"
          id="sharedPassword"
          label="비밀번호"
          value={sharedPassword}
          variant="outlined"
          type="password"
          sx={{ mb: 3 }}
        />
        <TextField
          fullWidth
          error={isError}
          required
          name="sharedPasswordCheck"
          id="sharedPasswordCheck"
          label="비밀번호 확인"
          helperText={isError ? '비밀번호가 일치하지 않습니다.' : null}
          value={sharedPasswordCheck}
          variant="outlined"
          type="password"
          sx={{ mb: 3 }}
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
