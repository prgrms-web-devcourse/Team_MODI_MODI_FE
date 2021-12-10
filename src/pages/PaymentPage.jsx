import { useCallback, useState } from 'react';
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
import { PARTY_DETAIL_DUMMY } from 'constants/mockData/parttDetailDummy';

const myPoint = 5000;

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const partyId = searchParams.get('partyId');
  console.log(`partyId: ${partyId}`);
  /** API 호출 로직
   * const [partyDetailAPIState, fetchPartyDetailAPIState] = useAsync(getPartyDetail(`/parties/${partyId}`))
   * const [partyDetailAPIState, fetchPartyDetailAPIState] = useAsync(post  PartyDetail(`/parties/${partyId}`))
   *
   *
   */

  const {
    ottName,
    grade,
    monthlyFee,
    period,
    rules,
    startDate,
    endDate,
    totalFee,
  } = PARTY_DETAIL_DUMMY;
  const [open, setOpen] = useState(!!(totalFee > myPoint));

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
          <PartyInfo
            ottName={ottName}
            ottGrade={grade}
            startDate={startDate}
            endDate={endDate}
            period={period}
            monthlyFee={monthlyFee}
          />
          <Rule rules={rules} />
          <PaymentInfo
            totalPrice={totalFee}
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
        </PageContents>
      </PageContainer>
      <Modal open={open}>
        <ModalBox>
          <PointChargeAlert
            onNavigateChargePage={handleNavigateChargePage}
            onClose={handleClosePointChargeAlert}
            paymentPoint={totalFee}
            myPoint={myPoint}
          />
        </ModalBox>
      </Modal>
    </>
  );
};

export default PaymentPage;
