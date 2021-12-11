import { Box } from '@mui/system';
import { useCallback, useState } from 'react';
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

const MY_USER_ID = 2;

const MyPartyDetailPage = () => {
  const params = useParams();
  const { myPartyId } = params;
  console.log(`myPartyId: ${myPartyId}`);

  /**
   * API처리 로직
   * getMyPartyDetail(myPartyId)
   * getSharedInfo()
   */

  const {
    ottName,
    grade,
    monthlyFee,
    period,
    members,
    rules,
    startDate,
    endDate,
    totalFee,
    monthlyReimbursement,
    status,
  } = PARTY_DETAIL_DUMMY;

  const checkLeader = members.find(
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
            월 {priceToString(monthlyReimbursement)}원
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
            월 {priceToString(monthlyFee)}원
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
              총 {priceToString(totalFee)}원
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
            ottName={ottName}
            ottGrade={grade}
            startDate={startDate}
            endDate={endDate}
            period={period}
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
            {status === 'RECRUITuNG' ? (
              <CardTemplate blur={true} />
            ) : (
              <PartyShareAccount
                fliped={fliped}
                onFlipCard={handleFlipCard}
                sharedInfo={{
                  sharedId: 'Modi@abc.com',
                  sharedPassword: '12312314sdf',
                }}
                partyStatus={status}
              />
            )}
          </Box>
          <Divider />
          <PartyMemberList members={members} />
          <Divider
            sx={{
              mt: 2,
              mb: 1,
            }}
          />
          <RuleContainer rules={rules} sx={{ borderBottom: '0' }} />
        </PageContents>
      </PageContainer>
    </>
  );
};

export default MyPartyDetailPage;
