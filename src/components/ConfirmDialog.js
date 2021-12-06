import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledButton = styled(Button)`
  width: 50%;
`;

const ConfirmDialog = () => {
  const [mustFilled, setMustFilled] = useState(false);

  const handleClickNo = () => {
    setMustFilled(false);
  };

  const handleClickYes = () => {
    setMustFilled(true);
  };

  return (
    <Card
      sx={{
        width: 351,
        height: 175,
        backgroundColor: '#FFB5B5',
        borderRadius: '16px',
      }}
    >
      <CardContent>
        <Typography variant="mediumB" component="p">
          모집 인원이 충족되지 않아도 파티를 자동으로 시작할까요?
        </Typography>
        <Typography variant="small" color="text.secondary">
          자동으로 시작하지 않는 경우, 모집 인원이 충족되지 못한 파티는
          파기됩니다.
        </Typography>
      </CardContent>
      <CardActions>
        <StyledButton
          size="large"
          color={mustFilled ? 'modiGray' : 'primary'}
          variant="contained"
          onClick={handleClickNo}
        >
          아니오
        </StyledButton>
        <StyledButton
          size="large"
          variant="contained"
          color={mustFilled ? 'primary' : 'modiGray'}
          onClick={handleClickYes}
        >
          예
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default ConfirmDialog;
