import { Box, Button, TextField, Divider } from '@mui/material';
import { PageContainer, PageContents, PageHeader } from 'components/Common';
import InfoElement from 'components/Common/InfoElement';
import { USER_INFO_KEY } from 'constants/keys';
import { useAuthState, useAuthDispatch } from 'contexts/authContext';
import useAsync from 'hooks/useAsync';
import useStorage from 'hooks/useStorage';
import { useEffect, useState } from 'react';
import { chargePoint } from 'utils/api';
import { pointFormatter } from 'utils/formatting';

const PointChargePage = () => {
  const { points } = useAuthState();
  const { onUpdate: onUpdateUserInfo } = useAuthDispatch();
  const [chargeInput, setChargeInput] = useState(0);
  const [pointState, chargeCallback] = useAsync(chargePoint, [], [], true);

  const [, setUserInfo] = useStorage(USER_INFO_KEY, null, 'session');

  const handleChargePoint = ({ target }) => {
    setChargeInput(Number(target.value));
  };

  const handleChargeClick = () => {
    chargeCallback({ points: chargeInput });
  };

  useEffect(() => {
    if (pointState.value) {
      setUserInfo(prevUserInfo => ({
        ...prevUserInfo,
        points: pointState.value.points,
      }));
      onUpdateUserInfo(pointState.value);
    }
  }, [pointState.value, onUpdateUserInfo, setUserInfo]);

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
                left={{
                  contentL: '보유 포인트',
                  variantL: 'smallB',
                }}
                right={{ contentR: pointFormatter(points) }}
              />
              <InfoElement
                left={{
                  contentL: '충전 포인트',
                  variantL: 'smallB',
                }}
                right={{ contentR: pointFormatter(chargeInput) }}
              />
              <Divider />
              <InfoElement
                left={{
                  contentL: '충전 후 예상 포인트',
                  variantL: 'smallB',
                  colorL: 'secondary',
                }}
                right={{
                  contentR: pointFormatter(chargeInput + points, 25),
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
