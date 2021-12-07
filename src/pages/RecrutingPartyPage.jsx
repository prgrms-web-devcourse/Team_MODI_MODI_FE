import { useNavigate, useParams } from 'react-router';
import PageHeader from 'components/PageHeader';
import { Button, Modal } from '@mui/material';
import PageContainer from 'components/PageContainer';
import PageContents from 'components/PageContents';
import PartyList from 'components/PartyList';
import { useState, useCallback } from 'react';
import PartyDetail from 'components/PartyDetail';
import { Box } from '@mui/system';
import { styled } from '@mui/system';

const DUMMY_DATA = [
  {
    partyId: 1,
    grade: '프리미엄',
    price: 2500,
    maxMemberCapacity: 4,
    currentMemberCapacity: 2,
    startDate: '2021-12-18',
    startsIn: 1,
    endDate: '2022-12-18',
    period: 12,
    mustFilled: true,
  },
  {
    partyId: 2,
    grade: '프리미엄',
    price: 2500,
    maxMemberCapacity: 4,
    currentMemberCapacity: 3,
    startDate: '2021-12-19',
    startsIn: 2,
    endDate: '2022-12-19',
    period: 12,
    mustFilled: false,
  },
  {
    partyId: 3,
    grade: '프리미엄',
    price: 2500,
    maxMemberCapacity: 4,
    currentMemberCapacity: 1,
    startDate: '2021-12-19',
    startsIn: 3,
    endDate: '2022-12-19',
    period: 12,
    mustFilled: false,
  },
  {
    partyId: 4,
    grade: '프리미엄',
    price: 2500,
    totalMember: 4,
    currentMember: 2,
    startDate: '2021-12-19',
    startsIn: 4,
    endDate: '2022-12-19',
    period: 12,
    mustFilled: false,
  },
  {
    partyId: 5,
    grade: '프리미엄',
    price: 2500,
    totalMember: 4,
    currentMember: 2,
    startDate: '2021-12-19',
    startsIn: 5,
    endDate: '2022-12-19',
    period: 12,
    mustFilled: false,
  },
  {
    partyId: 6,
    grade: '프리미엄',
    price: 2500,
    maxMemberCapacity: 4,
    currentMemberCapacity: 2,
    startDate: '2021-12-18',
    startsIn: 6,
    endDate: '2022-12-18',
    period: 12,
    mustFilled: true,
  },
  {
    partyId: 7,
    grade: '프리미엄',
    price: 2500,
    maxMemberCapacity: 4,
    currentMemberCapacity: 3,
    startDate: '2021-12-19',
    startsIn: 7,
    endDate: '2022-12-19',
    period: 12,
    mustFilled: false,
  },
  {
    partyId: 8,
    grade: '프리미엄',
    price: 2500,
    maxMemberCapacity: 4,
    currentMemberCapacity: 1,
    startDate: '2021-12-19',
    startsIn: 8,
    endDate: '2022-12-19',
    period: 12,
    mustFilled: false,
  },
  {
    partyId: 9,
    grade: '프리미엄',
    price: 2500,
    totalMember: 4,
    currentMember: 2,
    startDate: '2021-12-19',
    startsIn: 9,
    endDate: '2022-12-19',
    period: 12,
    mustFilled: false,
  },
  {
    partyId: 10,
    grade: '프리미엄',
    price: 2500,
    totalMember: 4,
    currentMember: 2,
    startDate: '2021-12-19',
    startsIn: 10,
    endDate: '2022-12-19',
    period: 12,
    mustFilled: false,
  },
];

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

const RecrutingPartyPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { ottServiceName } = params;

  const initialParties = DUMMY_DATA.slice(0, 5);
  const additionalParties = DUMMY_DATA.slice(5, 10);
  const myPoint = 10000;
  /**
   * ott 파티목록 API 요청
   *  const [recruitingPartyListAPIState, fetchRecruitingPartyListAPI] = useAsync(getRecruitingPartyList, [], false)
   *  const [isLoading, data, error] = recruitingPartyListAPIState
   *
   */
  const [parties, setParties] = useState(initialParties);
  const [open, setOpen] = useState(false);

  const handleClickMoreButton = useCallback(() => {
    setParties(parties => [...parties, ...additionalParties]);
  }, [additionalParties]);

  const handleOpen = useCallback(partyId => {
    console.log(partyId);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <PageContainer>
        <PageHeader ottServiceName={ottServiceName} size={72}>
          <Button type="button" size="small" variant="outlined">
            +파티
          </Button>
        </PageHeader>
        <PageContents
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <PartyList parties={parties} onClickParty={handleOpen} />
          <Button
            variant="contained"
            size="small"
            color="modiGray"
            onClick={handleClickMoreButton}
          >
            더보기
          </Button>
        </PageContents>
      </PageContainer>
      <Modal open={open} onClose={handleClose}>
        <ModalBox>
          <PartyDetail partyDetail={PARTY_DETAIL_DUMMY} myPoint={myPoint} />
        </ModalBox>
      </Modal>
    </>
  );
};

export default RecrutingPartyPage;

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 86%;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
`;
