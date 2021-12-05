import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useState } from 'react';

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
        <Typography variant="mediumB" style={{ display: 'block' }}>
          모집 인원이 충족되지 않아도 파티를 자동으로 시작할까요?
        </Typography>
        <Typography variant="small" color="text.secondary">
          자동으로 시작하지 않는 경우, 모집 인원이 충족되지 못한 파티는
          파기됩니다.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          sx={{
            width: 160,
          }}
          color={mustFilled ? 'modiGray' : 'primary'}
          variant="contained"
          onClick={handleClickNo}
        >
          아니오
        </Button>
        <Button
          size="large"
          sx={{
            width: 160,
          }}
          variant="contained"
          color={mustFilled ? 'primary' : 'modiGray'}
          onClick={handleClickYes}
        >
          예
        </Button>
      </CardActions>
    </Card>
  );
};

export default ConfirmDialog;
