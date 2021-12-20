import { Box, Button, TextField, Divider, Typography } from '@mui/material';
import { PageContainer, PageContents, PageHeader } from 'components/Common';
import InfoElement from 'components/Common/InfoElement';
import { USER_INFO_KEY } from 'constants/keys';
import { useAuthState, useAuthDispatch } from 'contexts/authContext';
import Alert from 'components/Common/Alert';
import useAsync from 'hooks/useAsync';
import useStorage from 'hooks/useStorage';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { chargePoint } from 'utils/api';
import { pointFormatter } from 'utils/formatting';
import {
  DAY_CHARGE_LIMIT_ERROR,
  DAY_CHARGE_MAX,
  TOTAL_CHARGE_LIMIT_ERROR,
  TOTAL_CHARGE_MAX,
} from 'constants/charge';

const PointChargePage = () => {
  const { state: partyId } = useLocation();
  const { points } = useAuthState();
  const navigate = useNavigate();
  const { onUpdate: onUpdateUserInfo } = useAuthDispatch();
  const [chargeInput, setChargeInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [chargeDisabled, setChargeDisabled] = useState(true);
  const [errorType, setErrorType] = useState('');
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [chargeState, chargeCallback] = useAsync(chargePoint, [], [], true);

  const [, setUserInfo] = useStorage(USER_INFO_KEY, null, 'session');

  const handleChargePoint = ({ target }) => {
    const onlyNumber = target.value.replace(/^0|[^0-9]/g, '');
    const inputNumber = Number(onlyNumber);

    if (
      inputNumber > DAY_CHARGE_MAX ||
      inputNumber < 1 ||
      inputNumber + points > TOTAL_CHARGE_MAX
    ) {
      inputNumber > DAY_CHARGE_MAX && setErrorType(DAY_CHARGE_LIMIT_ERROR);
      inputNumber + points > TOTAL_CHARGE_MAX &&
        setErrorType(TOTAL_CHARGE_LIMIT_ERROR);

      const sliced = String(inputNumber).slice(0, 7);
      setChargeInput(sliced);
      setChargeDisabled(true);
    } else {
      setErrorType('');
      setChargeInput(onlyNumber);
      setChargeDisabled(false);
    }
  };

  const handleChargeClick = () => {
    chargeCallback({ points: Number(chargeInput) });
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
  }, [chargeValue, onUpdateUserInfo, setUserInfo]);

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
              value={chargeInput}
              onChange={handleChargePoint}
              sx={{
                mb: 6,
              }}
            />
            {errorType === DAY_CHARGE_LIMIT_ERROR && (
              <Typography
                color="error"
                variant="small"
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
                  contentR: pointFormatter(Number(chargeInput)),
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
                  contentR: pointFormatter(Number(chargeInput) + points, 20),
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
                  wordBreak: 'keep-all',
                }}
                align="center"
                variant="small"
              >
                💸 개인이 최대로 보유할 수 있는 포인트를 초과했습니다. 💸
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
        onClose={() => {
          partyId ? navigate(`/payment?partyId=${partyId}`) : navigate('/user');
        }}
      />
    </>
  );
};

export default PointChargePage;
