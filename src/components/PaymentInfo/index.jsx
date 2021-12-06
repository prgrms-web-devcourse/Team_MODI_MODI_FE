import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import PropTypes from 'prop-types';

const PaymentInfo = ({ totalPrice }) => {
  return (
    <>
      <Typography variant="baseB" color="text.primary">
        결제정보
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 1,
        }}
      >
        <Typography variant="small" color="text.secondary">
          서비스 이용료
        </Typography>
        <Typography variant="small" color="text.primary">
          8500 P
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pb: 1,
          borderBottom: '2px dashed #DDDDDD',
        }}
      >
        <Typography variant="small" color="text.secondary">
          수수료(이용료의 5%)
        </Typography>
        <Typography variant="small" color="text.primary">
          425 P
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
        <Typography mr="auto" variant="small">
          보유 포인트
        </Typography>
        <ChargeButton>
          <Typography variant="micro" color="common.white">
            충전
          </Typography>
        </ChargeButton>
        <Typography variant="small" color="text.primary">
          20000 P
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="smallB" color="text.primary">
          결제 포인트
        </Typography>
        <Typography variant="visual" color="text.primary">
          8925 P
        </Typography>
      </Box>
    </>
  );
};

export default PaymentInfo;

PaymentInfo.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

const ChargeButton = styled('button')`
  width: 36px;
  height: 24px;
  border-radius: 12px;
  border: 0px;
  outline: 0px;
  background-color: #87cccd;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background-color: #95c4c4;
  }

  &:active {
    background-color: #51c4c4;
  }
`;
//   width: 36px;
//   height: 24px;
//   border-radius: 12px;
//   border: 0px;
//   background-color:
// `;
