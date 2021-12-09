import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import { priceToString } from 'utils/priceToString';

const COMMISSION_RATE = 0.05;

const PaymentInfo = ({ totalPrice, myPoint, onClickChargeButton }) => {
  const toNumberNotation = useCallback(price => priceToString(price), []);
  const commission = useMemo(() => totalPrice * COMMISSION_RATE, [totalPrice]);
  const extraCharge = useMemo(
    () => totalPrice * (1 + COMMISSION_RATE),
    [totalPrice],
  );

  const spaceBetweenSx = useMemo(
    () => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
    [],
  );

  const handleClickChargeButton = useCallback(() => {
    onClickChargeButton && onClickChargeButton();
  }, [onClickChargeButton]);

  return (
    <Box mt={2}>
      <Typography variant="baseB" color="text.primary">
        결제정보
      </Typography>
      <Box
        sx={{
          ...spaceBetweenSx,
          mt: 1,
        }}
      >
        <Typography variant="small" color="text.secondary">
          서비스 이용료
        </Typography>
        <Typography variant="small" color="text.primary">
          {toNumberNotation(totalPrice)} P
        </Typography>
      </Box>

      <Box
        sx={{
          ...spaceBetweenSx,
          pb: 1,
          borderBottom: '2px dashed #eeeeee',
        }}
      >
        <Typography variant="small" color="text.secondary">
          {`수수료(이용료의 ${COMMISSION_RATE * 100}%)`}
        </Typography>
        <Typography variant="small" color="text.primary">
          {toNumberNotation(commission)} P
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          mt: 1,
        }}
      >
        <Typography mr="auto" variant="small" color="text.secondary">
          보유 포인트
        </Typography>

        <ChargeButton onClick={handleClickChargeButton}>
          <Typography variant="micro" color="common.white">
            충전
          </Typography>
        </ChargeButton>

        <Typography variant="small" color="text.primary">
          {toNumberNotation(myPoint)} P
        </Typography>
      </Box>
      <Box sx={spaceBetweenSx}>
        <Typography variant="smallB" color="text.primary">
          결제 포인트
        </Typography>
        <Typography variant="visual" color="text.primary">
          {toNumberNotation(extraCharge)} P
        </Typography>
      </Box>
      {myPoint < totalPrice && (
        <Typography
          variant="microB"
          color="error"
          sx={{ textAlign: 'right' }}
          component="div"
        >
          {' '}
          현재 보유한 포인트가 부족합니다.
        </Typography>
      )}
    </Box>
  );
};

export default PaymentInfo;

PaymentInfo.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  myPoint: PropTypes.number.isRequired,
  onClickChargeButton: PropTypes.func.isRequired,
};

const ChargeButton = styled('button')`
  width: 36px;
  height: 24px;
  border-radius: 12px;
  border: 0px;
  outline: 0px;
  background-color: #87cccd;
  cursor: pointer;
  margin-right: 4px;

  &:hover {
    background-color: #95c4c4;
  }

  &:active {
    background-color: #51c4c4;
  }
`;
