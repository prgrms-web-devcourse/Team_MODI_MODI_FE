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
  onClickLeftButton,
  leftButtonText,
  rightButtonText = '확인',
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
          {type && <LottieIcon type={type} />}
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
              onClick={onClickLeftButton}
            >
              {leftButtonText}
            </ConfirmButton>
          )}
          <ConfirmButton
            type="button"
            variant="contained"
            size="small"
            onClick={onClose}
          >
            {rightButtonText}
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

const AlertBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '24px',
  width: '100%',
  maxWidth: '350px',
  minHeight: '280px',
  maxHeight: '90%',
  overflow: 'auto',
  borderRadius: '24px',
  backgroundColor: theme.palette.background.pageContent,
  boxShadow: '1px 2px 10px rgba(0, 0, 0, 0.25)',
  textAlign: 'center',
  outline: 'none',
}));

Alert.propTypes = {
  type: PropTypes.string,
  messege: PropTypes.string,
  helperText: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  isConfirm: PropTypes.bool,
  onClickLeftButton: PropTypes.func,
  leftButtonText: PropTypes.string,
  rightButtonText: PropTypes.string,
};

export default Alert;
