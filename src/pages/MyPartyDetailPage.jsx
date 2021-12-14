import { Box } from '@mui/system';
import { useCallback, useEffect, useState } from 'react';
import PartyShareAccount from 'components/MyParty/PartyShareAccount';
import { PageContainer, PageContents, PageHeader } from 'components/Common';
import PartyTitle from 'components/PartyTitle';
import { PARTY_DETAIL_DUMMY } from 'constants/mockData/parttDetailDummy';
import PartyMemberList from 'components/Common/PartyMemberList';
import RuleContainer from 'components/Common/Rule';
import { Divider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { priceToString } from 'utils/priceToString';
import CardTemplate from 'components/Common/CardTemplate';
import { getMyPartyById } from 'utils/api';
import useAsync from 'hooks/useAsync';
import PartyDetail from 'components/PartyJoin/PartyDetail';
import { AuthProvider } from 'contexts/authContext';

const MY_USER_ID = 7;

const MyPartyDetailPage = () => {
  // const { userName } = AuthProvider();
  const params = useParams();
  const { myPartyId } = params;
  const [partyDetailstate] = useAsync(getMyPartyById, [myPartyId]);
  const [partyDetail, setPartyDetail] = useState({
    ottName: '넷플릭스',
    grade: '',
    monthlyFee: 0,
    period: 0,
    members: [],
    rules: [],
    startDate: '',
    endDate: '',
    totalFee: 0,
    monthlyReimbursement: 0,
    status: '',
  });

  useEffect(() => {
    if (partyDetailstate.value) {
      console.log(partyDetailstate.value);
      setPartyDetail(partyDetailstate.value);
    }
  }, [partyDetailstate.value]);

  /**
   * API처리 로직
   * getMyPartyDetail(myPartyId)
   * getSharedInfo()
   */

  const checkLeader = partyDetail.members.find(
    ({ userId }) => userId === MY_USER_ID,
  )?.isLeader;

  const feeRender = isLeader => {
    if (isLeader) {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            ml: 'auto',
          }}
        >
          <AddCircleOutline color="secondary" fontSize="small" />
          <Typography variant="baseB">
            월 {priceToString(partyDetail.monthlyReimbursement)}원
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            ml: 'auto',
            textAlign: 'right',
          }}
        >
          <Typography variant="smallB" component="p">
            월 {priceToString(partyDetail.monthlyFee)}원
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              ml: 'auto',
            }}
          >
            <RemoveCircleOutline color="error" fontSize="small" />
            <Typography variant="smallB">
              총 {priceToString(partyDetail.totalFee)}원
            </Typography>
          </Box>
        </Box>
      );
    }
  };

  const [fliped, setFliped] = useState(false);

  const handleFlipCard = useCallback(() => {
    setFliped(prev => !prev);
  }, []);

  return (
    <>
      <PageContainer>
        <PageHeader title="파티 확인하기" />
        <PageContents>
          <PartyTitle
            ottName={partyDetail.ottName}
            ottGrade={partyDetail.grade}
            startDate={partyDetail.startDate}
            endDate={partyDetail.endDate}
            period={partyDetail.period}
          >
            {feeRender(checkLeader)}
          </PartyTitle>
          <Box
            sx={{
              mt: 2,
              mb: 5,
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              height: 192,
              perspective: '2000px',
            }}
          >
            {partyDetail.status === 'RECRUITING' ? (
              <CardTemplate blur={true} />
            ) : (
              <PartyShareAccount
                fliped={fliped}
                onFlipCard={handleFlipCard}
                sharedInfo={{
                  sharedId: 'Modi@abc.com',
                  sharedPassword: '12312314sdf',
                }}
                partyStatus={partyDetail.status}
              />
            )}
          </Box>
          <Divider />
          <PartyMemberList members={partyDetail.members} />
          <Divider
            sx={{
              mt: 2,
              mb: 1,
            }}
          />
          <RuleContainer rules={partyDetail.rules} sx={{ borderBottom: '0' }} />
        </PageContents>
      </PageContainer>
    </>
  );
};

export default MyPartyDetailPage;
