import { useCallback, useState, useMemo } from 'react';
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

import { getPartyDetail } from 'utils/api';
import useAsync from 'hooks/useAsync';

const myPoint = 5000;

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const partyId = useMemo(() => searchParams.get('partyId'), [searchParams]);
  const [open, setOpen] = useState(false);
  const [partyDetailAPIState] = useAsync(getPartyDetail, [partyId]);

  const {
    isLoading: partyDetailLoading,
    value: partyDetailValue,
    error: partyDetailError,
  } = partyDetailAPIState;

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

  const handleClosePointChargeAlert = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpenPointChargeAlert = useCallback(() => {
    setOpen(true);
  }, []);

  const handleNavigateChargePage = useCallback(() => {
    navigate('/charge');
  }, [navigate]);

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
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  mt: 2,
                }}
                size="large"
                onClick={handleOpenPointChargeAlert}
              >
                <Typography variant="baseB">결제하기</Typography>
              </Button>
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
            myPoint={myPoint}
          />
        </ModalBox>
      </Modal>
    </>
  );
};

export default PaymentPage;
