import { Typography, Box, Button, Divider } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useCallback } from 'react';

const PointChargeAlert = ({
  onNavigateChargePage,
  onClose,
  paymentPoint,
  myPoint,
}) => {
  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleNavigateChargePage = useCallback(() => {
    onNavigateChargePage && onNavigateChargePage();
  }, [onNavigateChargePage]);

  return (
    <>
      <Typography
        variant="large"
        color="error"
        component="h3"
        id="parent-modal-title"
        sx={{ marginBottom: '24px' }}
      >
        보유 포인트가 부족합니다.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 0 8px',
        }}
        component="dl"
      >
        <Typography color="text.secondary" variant="small" component="dt">
          결제 포인트
        </Typography>
        <Typography variant="small" component="dd">
          {priceToString(paymentPoint)} P
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 0 8px',
        }}
        component="dl"
      >
        <Typography color="text.secondary" variant="small" component="dt">
          보유 포인트
        </Typography>
        <Typography variant="smallB" color="error" component="dd">
          {priceToString(myPoint)} P
        </Typography>
      </Box>
      <Divider sx={{ margin: '8px 0' }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '0 0 16px',
        }}
        component="dl"
      >
        <Typography variant="baseB" color="text.primary" component="dt">
          필요 포인트
        </Typography>
        <Typography variant="large" color="text.primary" component="dd">
          {priceToString(paymentPoint - myPoint)} P
        </Typography>
      </Box>
      <Button
        variant="contained"
        size="large"
        sx={{
          width: '48%',
          marginRight: '4%',
        }}
        onClick={handleNavigateChargePage}
      >
        충전하기
      </Button>
      <Button
        variant="outlined"
        size="large"
        onClick={onClose}
        sx={{ width: '48%' }}
      >
        취소
      </Button>
    </>
  );
};

PointChargeAlert.propTypes = {
  onNavigateChargePage: PropTypes.func,
  onClose: PropTypes.func,
  paymentPoint: PropTypes.number.isRequired,
  myPoint: PropTypes.number.isRequired,
};

export default PointChargeAlert;
