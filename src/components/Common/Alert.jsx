import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Box, Button, Typography, Modal } from '@mui/material';
import LottieIcon from './LottieIcon';

const Alert = ({
  isOpen,
  type,
  messege,
  helperText,
  onClose,
  isConfirm,
  onClickDelete,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <AlertBox>
        <Box
          sx={{
            flexGrow: 1,
            mb: 2,
          }}
        >
          <LottieIcon type={type} />
          <Typography
            variant="large"
            component="p"
            color="text.primary"
            sx={{ mb: 0.5 }}
          >
            {messege}
          </Typography>
          <Typography variant="base" component="p" color="text.secondary">
            {helperText}
          </Typography>
        </Box>
        <Box>
          {isConfirm && (
            <ConfirmButton
              sx={{
                mr: 2,
              }}
              type="button"
              variant="contained"
              size="small"
              color="error"
              onClick={onClickDelete}
            >
              파티 삭제
            </ConfirmButton>
          )}
          <ConfirmButton
            type="button"
            variant="contained"
            size="small"
            onClick={onClose}
          >
            확인
          </ConfirmButton>
        </Box>
      </AlertBox>
    </Modal>
  );
};

const ConfirmButton = styled(Button)`
  font-size: 16;
  border-radius: 20;
  width: 40%;
  margin: 0 auto;
`;

const AlertBox = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 350px;
  min-height: 280px;
  max-height: 90%;
  overflow: auto;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

Alert.propTypes = {
  type: PropTypes.string,
  messege: PropTypes.string,
  helperText: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  isConfirm: PropTypes.bool,
  onClickDelete: PropTypes.func,
};

export default Alert;
