import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

const StyledButton = styled(Button)`
  width: 50%;
`;

const ConfirmDialog = ({ mustFilled, onConfirm }) => {
  const handleClickNo = () => {
    onConfirm(true);
  };

  const handleClickYes = () => {
    onConfirm(false);
  };

  return (
    <Card
      sx={{
        backgroundColor: '#FFB5B5',
        borderRadius: '16px',
      }}
    >
      <CardContent sx={{ pb: 0 }}>
        <Typography variant="mediumB" component="p" sx={{ mb: 1 }}>
          모집 인원이 충족되지 않아도 파티를 자동으로 시작할까요?
        </Typography>
        <Typography variant="small" component="p" color="text.secondary">
          자동으로 시작하지 않는 경우, 모집 인원이 충족되지 못한 파티는
          파기됩니다.
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <StyledButton
          size="large"
          color={
            mustFilled !== null
              ? mustFilled
                ? 'primary'
                : 'modiGray'
              : 'modiGray'
          }
          variant={
            mustFilled !== null
              ? mustFilled
                ? 'contained'
                : 'outlined'
              : 'outlined'
          }
          onClick={handleClickNo}
        >
          아니오
        </StyledButton>
        <StyledButton
          size="large"
          variant={
            mustFilled !== null
              ? mustFilled
                ? 'outlined'
                : 'contained'
              : 'outlined'
          }
          color={
            mustFilled !== null
              ? mustFilled
                ? 'modiGray'
                : 'primary'
              : 'modiGray'
          }
          onClick={handleClickYes}
        >
          예
        </StyledButton>
      </CardActions>
    </Card>
  );
};

ConfirmDialog.propTypes = {
  mustFilled: PropTypes.bool,
  onConfirm: PropTypes.func,
};

export default ConfirmDialog;
