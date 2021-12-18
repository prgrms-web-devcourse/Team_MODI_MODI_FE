import { useCallback, useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Button, Modal, Typography } from '@mui/material';

import {
  PageHeader,
  PageContainer,
  PageContents,
  Rule,
  ModalBox,
} from 'components/Common';
import { PaymentInfo, PointChargeAlert } from 'components/Payment';
import PartyInfo from 'components/PartyJoin/PartyInfo';

import { getPartyDetail, requestPartyJoin, getMyInfo } from 'utils/api';
import useAsync from 'hooks/useAsync';
import { useAuthState } from 'contexts/authContext';
import { COMMISSION_RATE } from 'constants/commissionRate';
import { useAuthDispatch } from 'contexts/authContext';
import { USER_INFO_KEY } from 'constants/keys';
import Alert from 'components/Common/Alert';

const PaymentPage = () => {
  const { points: myPoint } = useAuthState();
  const [searchParams] = useSearchParams();
  const { onUpdate: onUpdateUserInfo } = useAuthDispatch();
  const navigate = useNavigate();
  const partyId = useMemo(() => searchParams.get('partyId'), [searchParams]);
  const [open, setOpen] = useState(false);
  const [openPaymentSuccess, setOpenPaymentSuccess] = useState(false);
  const [openPaymentFail, setOpenPaymentFail] = useState(false);

  const [partyDetailAPIState] = useAsync(getPartyDetail, [partyId]);
  const [partyJoinApiState, fetchPartyJoinApiState] = useAsync(
    requestPartyJoin,
    [partyId],
    [],
    true,
  );

  const [getMyInfoApiState, fetchGetMyInfoApiState] = useAsync(
    getMyInfo,
    [],
    [],
    true,
  );

  const {
    isLoading: partyDetailLoading,
    value: partyDetailValue,
    error: partyDetailError,
  } = partyDetailAPIState;

  const {
    isLoading: partyJoinLoading,
    value: partyJoinValue,
    error: partyJoinError,
  } = partyJoinApiState;

  const { value: myInfoValue } = getMyInfoApiState;

  useEffect(() => {
    if (partyId === null) {
      navigate('/');
    }
  }, [partyId, navigate]);

  useEffect(() => {
    partyJoinValue && setOpenPaymentSuccess(true);
    partyJoinError && setOpenPaymentFail(true);
  }, [partyJoinValue, partyJoinError]);

  useEffect(() => {
    partyJoinValue && fetchGetMyInfoApiState();
  }, [partyJoinValue, fetchGetMyInfoApiState]);

  useEffect(() => {
    if (myInfoValue) {
      sessionStorage.setItem(USER_INFO_KEY, JSON.stringify(myInfoValue));
      onUpdateUserInfo(myInfoValue);
    }
  }, [myInfoValue, onUpdateUserInfo]);
  const {
    ottName = '',
    grade = '',
    monthlyPrice = 0,
    period = 0,
    rules = [],
    startDate = '',
    endDate = '',
    totalPrice = 0,
  } = partyDetailValue || {};

  const paymentAvailable = useMemo(
    () => myPoint > totalPrice,
    [myPoint, totalPrice],
  );

  const handleClosePointChargeAlert = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpenPointChargeAlert = useCallback(() => {
    setOpen(true);
  }, []);

  const handleNavigateChargePage = useCallback(() => {
    navigate('/charge');
  }, [navigate]);

  const handleNavigateMyPartyDetailPage = useCallback(() => {
    navigate(`/myParty/${partyId}`);
  }, [navigate, partyId]);

  const handleRequestJoinParty = useCallback(() => {
    fetchPartyJoinApiState(partyId);
  }, [partyId, fetchPartyJoinApiState]);

  const handleClosePaymentFailAlert = useCallback(() => {
    setOpenPaymentFail(false);
  }, []);

  return (
    <>
      <PageContainer>
        <PageHeader title="파티 결제" />
        <PageContents>
          {partyDetailLoading && <div>로딩중</div>}
          {partyDetailError && <div>에러</div>}
          {partyDetailValue && (
            <>
              <PartyInfo
                ottName={ottName}
                ottGrade={grade}
                startDate={startDate}
                endDate={endDate}
                period={period}
                monthlyFee={monthlyPrice}
              />
              <Rule rules={rules} />
              <PaymentInfo
                totalPrice={totalPrice}
                myPoint={myPoint}
                onClickChargeButton={handleNavigateChargePage}
              />
              {paymentAvailable && (
                <Button
                  variant="contained"
                  sx={{
                    width: '100%',
                    mt: 2,
                  }}
                  size="large"
                  onClick={handleRequestJoinParty}
                >
                  <Typography variant="baseB">결제하기</Typography>
                </Button>
              )}
              {!paymentAvailable && (
                <Button
                  variant="contained"
                  sx={{
                    width: '100%',
                    mt: 2,
                  }}
                  size="large"
                  onClick={handleOpenPointChargeAlert}
                >
                  <Typography variant="baseB">충전하기</Typography>
                </Button>
              )}
            </>
          )}
        </PageContents>
      </PageContainer>
      <Modal open={open}>
        <ModalBox>
          <PointChargeAlert
            onNavigateChargePage={handleNavigateChargePage}
            onClose={handleClosePointChargeAlert}
            paymentPoint={totalPrice * (1 + COMMISSION_RATE)}
            myPoint={myPoint}
          />
        </ModalBox>
      </Modal>
      <>
        {partyJoinLoading && <h1>로딩중</h1>}

        <Alert
          isOpen={openPaymentSuccess}
          type="paymentSuccess"
          messege="가입 성공"
          helperText="새로운 파티원이 된 걸 환영합니다!"
          onClose={handleNavigateMyPartyDetailPage}
        />

        <Alert
          isOpen={openPaymentFail}
          type="paymentFail"
          messege="결제 실패"
          helperText="결제 중에 오류가 발생했습니다."
          onClose={handleClosePaymentFailAlert}
        />
      </>
    </>
  );
};

export default PaymentPage;
