import { Typography, Box, Button, TextField } from '@mui/material';
import { PageContainer, PageContents, PageHeader } from 'components/Common';
import InfoElement from 'components/Common/InfoElement';
import { AuthProvider } from 'contexts/authContext';
import useAsync from 'hooks/useAsync';
import { useState } from 'react';
import { chargePoint } from 'utils/api';

const PointChargePage = () => {
  const points = 1000;
  const totalPoints = 1000;
  // const { points } = AuthProvider();
  const [chargePoint, setChargePoint] = useState(0);
  const [pointState] = useAsync(chargePoint, [chargePoint], [], true);

  const handleChargePoint = ({ target }) => {
    console.log(target.value);
    setChargePoint(target.value);
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
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <TextField
                fullWidth
                value={chargePoint}
                onChange={handleChargePoint}
              />
              <InfoElement
                left={{ contentL: '보유 포인트' }}
                right={{ contentR: points }}
              />
              <InfoElement
                left={{
                  contentL: '충전 후 예상 포인트',
                  colorL: 'secondary',
                }}
                right={{
                  contentR: totalPoints,
                  variantR: 'large',
                  colorR: 'text.primary',
                }}
              />
            </Box>

            <Button variant="contained" onClick={handleChargePoint}>
              충전하기
            </Button>
          </Box>
        </PageContents>
      </PageContainer>
    </>
  );
};

export default PointChargePage;
