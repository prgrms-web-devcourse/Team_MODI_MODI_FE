import { Box, Button, TextField, Divider, Typography } from '@mui/material';
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

const DAY_CHARGE_LIMIT_ERROR = 'DAY_CHARGE';
const TOTAL_CHARGE_LIMIT_ERROR = 'TOTAL_CHARGE';

const PointChargePage = () => {
  const { points } = useAuthState();
  const navigate = useNavigate();
  const { onUpdate: onUpdateUserInfo } = useAuthDispatch();
  const [chargeInput, setChargeInput] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [chargeDisabled, setChargeDisabled] = useState(true);
  const [errorType, setErrorType] = useState('');
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [chargeState, chargeCallback] = useAsync(chargePoint, [], [], true);

  const [, setUserInfo] = useStorage(USER_INFO_KEY, null, 'session');

  const handleChargePoint = ({ target }) => {
    const inputNumber = Number(target.value);
    if (inputNumber > 100000 || inputNumber + points > 1000000) {
      inputNumber > 100000 && setErrorType(DAY_CHARGE_LIMIT_ERROR);
      inputNumber + points > 1000000 && setErrorType(TOTAL_CHARGE_LIMIT_ERROR);
      setChargeDisabled(true);
    } else {
      setErrorType('');
      setChargeDisabled(false);
    }
    setChargeInput(inputNumber);
  };

  const handleChargeClick = () => {
    chargeCallback({ points: chargeInput });
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
      setAlertMessage('충전에 성공했습니다!');
      setIsOpen(prev => !prev);
    }
  }, [chargeValue, onUpdateUserInfo, setUserInfo, navigate]);

  useEffect(() => {
    if (chargeError) {
      setAlertType('paymentFail');
      setAlertMessage('충전에 실패했습니다!');
      setIsOpen(prev => !prev);
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
            {errorType === DAY_CHARGE_LIMIT_ERROR && (
              <Typography
                color="error"
                sx={{
                  mt: -5,
                  ml: 2,
                  mb: 2,
                }}
              >
                최대 충전 금액은 100,000원 입니다.
              </Typography>
            )}
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
                right={{
                  contentR: pointFormatter(points),
                }}
              />
              <InfoElement
                left={{
                  contentL: '충전 포인트',
                  variantL: 'smallB',
                  colorL:
                    errorType === DAY_CHARGE_LIMIT_ERROR
                      ? 'error'
                      : 'text.secondary',
                }}
                right={{
                  contentR: pointFormatter(chargeInput),
                  colorR:
                    errorType === DAY_CHARGE_LIMIT_ERROR
                      ? 'error'
                      : 'text.secondary',
                }}
              />
              <Divider />
              <InfoElement
                left={{
                  contentL: '충전 후 예상 포인트',
                  variantL: 'smallB',
                  colorL:
                    errorType === TOTAL_CHARGE_LIMIT_ERROR
                      ? 'error'
                      : 'secondary',
                }}
                right={{
                  contentR: pointFormatter(chargeInput + points, 20),
                  variantR: 'large',
                  colorR:
                    errorType === TOTAL_CHARGE_LIMIT_ERROR
                      ? 'error'
                      : 'text.primary',
                }}
              />
            </Box>
            {errorType === TOTAL_CHARGE_LIMIT_ERROR && (
              <Typography
                sx={{
                  m: 2,
                }}
                align="center"
                variant="base"
              >
                개인이 최대로 보유할 수 있는 포인트롤 초과했습니다. 💸
                <br />
                포인트 사용 후 다시 시도해주세요 😎
              </Typography>
            )}
            <Button
              variant="contained"
              disabled={chargeDisabled}
              onClick={handleChargeClick}
            >
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
