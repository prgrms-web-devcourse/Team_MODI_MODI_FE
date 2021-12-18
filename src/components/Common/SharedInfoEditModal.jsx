import ModalBox from './ModalBox';
import { Modal, TextField, Typography, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

const SharedInfoEditModal = ({ open, onClose, onSubmit }) => {
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleChangePasswordInput = useCallback(
    e => {
      setPassword(e.target.value);
      setIsValid(e.target.value === checkPassword);
    },
    [checkPassword],
  );

  const handleChangeCheckPasswordInput = useCallback(
    e => {
      setCheckPassword(e.target.value);
      setIsValid(e.target.value === password);
    },
    [password],
  );

  const handleClickCancelButton = useCallback(() => {
    setPassword('');
    setCheckPassword('');
    setIsValid(null);
    onClose && onClose();
  }, [onClose]);

  const handleSumbmitEditedPassword = useCallback(
    e => {
      e.preventDefault();
      if (isValid) {
        setPassword('');
        setCheckPassword('');
        setIsValid(null);
        onSubmit && onSubmit(password);
        onClose && onClose();
      }
    },
    [password, onSubmit, onClose, isValid],
  );

  return (
    <Modal open={open} onClose={onClose}>
      <ModalBox component="form" onSubmit={handleSumbmitEditedPassword}>
        <Typography variant="mediumB">공유 계정 정보 변경</Typography>
        <TextField
          fullWidth
          required
          autoComplete="off"
          name="sharedPassword"
          id="sharedPassword"
          onChange={handleChangePasswordInput}
          label="비밀번호"
          value={password}
          variant="outlined"
          type="password"
          sx={{
            mb: 2,
            mt: 2,
          }}
        />
        <TextField
          fullWidth
          required
          autoComplete="off"
          error={isValid === false}
          name="sharedPasswordCheck"
          id="sharedPasswordCheck"
          label="비밀번호 확인"
          helperText={isValid === false ? '비밀번호가 일치하지 않습니다.' : ''}
          variant="outlined"
          type="password"
          value={checkPassword}
          onChange={handleChangeCheckPasswordInput}
          sx={{ mb: 3 }}
        />

        <Box display="flex" justifyContent="flex-end">
          <Button
            color="primary"
            type="sumbit"
            onClick={handleSumbmitEditedPassword}
          >
            변경
          </Button>
          <Button color="modiGray" onClick={handleClickCancelButton}>
            취소
          </Button>
        </Box>
      </ModalBox>
    </Modal>
  );
};

SharedInfoEditModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default SharedInfoEditModal;
