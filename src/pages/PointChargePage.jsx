import { Box, Button, TextField, Divider } from '@mui/material';
import { PageContainer, PageContents, PageHeader } from 'components/Common';
import InfoElement from 'components/Common/InfoElement';
import { AuthProvider } from 'contexts/authContext';
import useAsync from 'hooks/useAsync';
import { useState, useEffect } from 'react';
import { chargePoint } from 'utils/api';

// TODO
// authProvider에서 보유 포인트 받아와서 처리

const PointChargePage = () => {
  const points = 1000;
  // const { points } = AuthProvider();
  const [chargeInput, setChargeInput] = useState(0);
  const [pointState, chargeCallback] = useAsync(
    chargePoint,
    [chargePoint],
    [],
    true,
  );

  const handleChargePoint = ({ target }) => {
    setChargeInput(target.value);
  };

  const handleChargeClick = () => {
    chargeCallback({ points: Number(chargeInput) });
  };

  return (
    <>
      <PageContainer>
        <PageHeader title="충전" />
        <PageContents>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <TextField
              fullWidth
              placeholder="금액을 입력해 주세요"
              value={chargeInput}
              onChange={handleChargePoint}
              type="number"
              sx={{
                mb: 6,
              }}
            />
            <Box
              sx={{
                mb: 3,
              }}
            >
              <InfoElement
                left={{ contentL: '보유 포인트' }}
                right={{ contentR: points }}
              />
              <Divider />
              <InfoElement
                left={{
                  contentL: '충전 후 예상 포인트',
                  colorL: 'secondary',
                }}
                right={{
                  contentR: Number(chargeInput) + points,
                  variantR: 'large',
                  colorR: 'text.primary',
                }}
              />
            </Box>

            <Button variant="contained" onClick={handleChargeClick}>
              충전하기
            </Button>
          </Box>
        </PageContents>
      </PageContainer>
    </>
  );
};

export default PointChargePage;
