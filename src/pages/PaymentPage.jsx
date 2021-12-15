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

import { getPartyDetail, requestPartyJoin } from 'utils/api';
import useAsync from 'hooks/useAsync';
import { useAuthState } from 'contexts/authContext';

const PaymentPage = () => {
  const { points: myPoint } = useAuthState();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const partyId = useMemo(() => searchParams.get('partyId'), [searchParams]);
  const [open, setOpen] = useState(false);
  const [openPaymentResult, setOpenPaymentResult] = useState(false);
  const [partyDetailAPIState] = useAsync(getPartyDetail, [partyId]);
  const [partyJoinApiState, fetchPartyJoinApiState] = useAsync(
    requestPartyJoin,
    [partyId],
    [],
    true,
  );

  const {
    isLoading: partyDetailLoading,
    value: partyDetailValue,
    error: partyDetailError,
  } = partyDetailAPIState;

  const {
    isLoading: PartyJoinLoading,
    value: PartyJoinValue,
    error: PartyJoinError,
  } = partyJoinApiState;

  useEffect(() => {
    (PartyJoinValue || PartyJoinError) && setOpenPaymentResult(true);
  }, [PartyJoinValue, PartyJoinError]);

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
    () => myPoint ?? 10000 > totalPrice,
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

  const handleClosePaymentResultAlert = useCallback(() => {
    setOpenPaymentResult(false);
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
                myPoint={myPoint || 10000}
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
            paymentPoint={totalPrice}
            myPoint={myPoint || 10000}
          />
        </ModalBox>
      </Modal>
      <Modal open={openPaymentResult}>
        <ModalBox>
          {PartyJoinLoading && <h1>로딩중</h1>}
          {PartyJoinValue && (
            <>
              <h1>결제실패</h1>
              <button onClick={handleClosePaymentResultAlert}> 닫기</button>
            </>
          )}
          {PartyJoinError && (
            <>
              <div>결제 성공!</div>
              <button onClick={handleNavigateMyPartyDetailPage}>
                파티정보 확인하기
              </button>
            </>
          )}
        </ModalBox>
      </Modal>
    </>
  );
};

export default PaymentPage;
