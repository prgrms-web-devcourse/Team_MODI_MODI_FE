import { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Typography, Box, Button, Divider } from '@mui/material';
import { priceToString } from 'utils/priceToString';
import InfoElement from 'components/Common/InfoElement';
import { COMMISSION_RATE } from 'constants/commissionRate';

const PaymentInfo = ({ totalPrice, myPoint, onClickChargeButton }) => {
  const toNumberNotation = useCallback(price => priceToString(price), []);
  const commission = useMemo(() => totalPrice * COMMISSION_RATE, [totalPrice]);
  const extraCharge = useMemo(
    () => totalPrice * (1 + COMMISSION_RATE),
    [totalPrice],
  );

  const handleClickChargeButton = useCallback(() => {
    onClickChargeButton && onClickChargeButton();
  }, [onClickChargeButton]);

  return (
    <Box p="24px 0">
      <Typography variant="baseB" component="h3" sx={{ mb: 1 }}>
        결제정보
      </Typography>

      <InfoElement
        left={{ contentL: '서비스 이용료' }}
        right={{
          contentR: `${toNumberNotation(totalPrice)} P`,
          colorR: 'text.primary',
        }}
      />
      <InfoElement
        left={{ contentL: `수수료(이용료의 ${COMMISSION_RATE * 100}%)` }}
        right={{
          contentR: `${toNumberNotation(commission)} P`,
          colorR: 'text.primary',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          m: 0,
          mb: 1,
          '&:last-child': {
            mb: 0,
          },
        }}
        component="dl"
      >
        <Typography color="text.secondary" variant="small" component="dt">
          보유 포인트
        </Typography>
        <Typography color="text.primary" variant="small" component="dd">
          <ChargeButton onClick={handleClickChargeButton}>충전</ChargeButton>
          {toNumberNotation(myPoint)} P
        </Typography>
      </Box>
      <Divider sx={{ m: '20px 0' }} />
      <InfoElement
        left={{
          contentL: '결제 포인트',
          variantL: 'smallB',
          colorL: 'text.primary',
        }}
        right={{
          contentR: `${toNumberNotation(extraCharge)} P`,
          variantR: 'visual',
          colorR: 'text.primary',
        }}
      />

      {myPoint < totalPrice && (
        <Typography
          variant="microB"
          color="error"
          sx={{ textAlign: 'right' }}
          component="div"
        >
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

const ChargeButton = styled(Button)`
  padding: 2px 6px;
  margin-right: 4px;
  min-width: 40px;
  background-color: #87cccd;
  border-radius: 16px;
  border: 0px;
  outline: 0px;
  line-height: 22px;
  cursor: pointer;
  color: #fff;

  &:hover {
    background-color: #95c4c4;
  }

  &:active {
    background-color: #51c4c4;
  }
`;
