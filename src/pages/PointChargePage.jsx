import { Box, Button, TextField, Divider } from '@mui/material';
import { PageContainer, PageContents, PageHeader } from 'components/Common';
import InfoElement from 'components/Common/InfoElement';
import { USER_INFO_KEY } from 'constants/keys';
import { useAuthState, useAuthDispatch } from 'contexts/authContext';
import Alert from 'components/Common/Alert';
import useAsync from 'hooks/useAsync';
import useStorage from 'hooks/useStorage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { chargePoint } from 'utils/api';
import { pointFormatter } from 'utils/formatting';

const PointChargePage = () => {
  const { points } = useAuthState();
  const navigate = useNavigate();
  const { onUpdate: onUpdateUserInfo } = useAuthDispatch();
  const [chargeInput, setChargeInput] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [chargeState, chargeCallback] = useAsync(chargePoint, [], [], true);

  const [, setUserInfo] = useStorage(USER_INFO_KEY, null, 'session');

  const handleChargePoint = ({ target }) => {
    setChargeInput(Number(target.value));
  };

  const handleChargeClick = () => {
    chargeCallback({ points: chargeInput });
    setIsOpen(prev => !prev);
  };

  const { value: chargeValue, error: chargeError } = chargeState;

  useEffect(() => {
    if (chargeValue) {
      setUserInfo(prevUserInfo => ({
        ...prevUserInfo,
        points: chargeValue.points,
      }));
      onUpdateUserInfo(chargeValue);
      setAlertType('paymentSuccess');
      setAlertMessage('결제에 성공했습니다!');
    }
  }, [chargeValue, onUpdateUserInfo, setUserInfo, navigate]);

  useEffect(() => {
    if (chargeError) {
      setAlertType('paymentFail');
      setAlertMessage('결제에 실패했습니다!');
    }
  }, [chargeError]);

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
      <Alert
        isOpen={isOpen}
        type={alertType}
        messege={alertMessage}
        onClose={() => navigate('/user')}
      />
    </>
  );
};

export default PointChargePage;
