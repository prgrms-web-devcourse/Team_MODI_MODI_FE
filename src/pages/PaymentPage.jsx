import PageHeader from 'components/PageHeader';
import PageContainer from 'components/PageContainer';
import PageContents from 'components/PageContents';
import PartyInfo from 'components/PartyInfo';
import PaymentInfo from 'components/PaymentInfo';
import Rule from 'components/Rule';
import { Button, Modal, Typography } from '@mui/material';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/system';

const PARTY_DETAIL_DUMMY = {
  partyId: 1,
  ottId: 1,
  ottName: '넷플릭스',
  grade: '프리미엄',
  monthlyFee: 2500,
  totalFee: 25000,
  maxMemberCapacity: 4,
  currentMemberCapacity: 2,
  startDate: '2021-12-8',
  startsIn: 7,
  period: 12,
  endDate: '2022-12-8',
  mustFilled: true,
  members: [
    {
      userId: 1,
      username: '닉네임',
      isLeader: true,
    },
    {
      userId: 2,
      username: '닉네임',
      isLeader: false,
    },
  ],
  rules: [
    {
      ruleId: 1,
      ruleName: '1인 1회선',
    },
    {
      ruleId: 2,
      ruleName: '1인 1기기',
    },
    {
      ruleId: 3,
      ruleName: '개인사정 환불 불가',
    },
    {
      ruleId: 4,
      ruleName: '계정 양도 불가',
    },
    {
      ruleId: 5,
      ruleName: '닉네임과 프로필네임 일치',
    },
    {
      ruleId: 6,
      ruleName: '19세 이상',
    },
    {
      ruleId: 7,
      ruleName: '설정 변경 불가',
    },
  ],
};
const myPoint = 50000;

const PaymentPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const partyId = searchParams.get('partyId');
  console.log(partyId);
  /** API 호출 로직
   * const [isLoading, state, error] = useAsync(getPartyDetail(`/parties/${partyId}`))
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
  const [open, setOpen] = useState(totalFee > myPoint);

  const handleClosePointLackModal = useCallback(() => {
    setOpen(false);
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
          >
            <Typography variant="baseB">결제하기</Typography>
          </Button>
        </PageContents>
      </PageContainer>
      <Modal open={open} onClose={handleClosePointLackModal}>
        <Box>
          <h1>{totalFee}</h1>
          <h1>{myPoint}</h1>
        </Box>
      </Modal>
    </>
  );
};

export default PaymentPage;
