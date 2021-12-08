import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)`
  width: 50%;
`;

const ConfirmDialog = ({ initialMustFilled, onConfirm }) => {
  const [mustFilled, setMustFilled] = useState(initialMustFilled);

  const handleClickNo = () => {
    setMustFilled(true);
    onConfirm(true);
  };

  const handleClickYes = () => {
    setMustFilled(false);
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
              : 'contained'
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
  initialMustFilled: PropTypes.bool,
  onConfirm: PropTypes.func,
};

export default ConfirmDialog;
