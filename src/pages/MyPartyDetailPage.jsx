import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Chip, Divider, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { getMyPartyById, getSharedAccountInfo } from 'utils/api';
import useAsync from 'hooks/useAsync';
import { useAuthState } from 'contexts/authContext';
import { priceToString } from 'utils/priceToString';
import PartyTitle from 'components/PartyTitle';
import {
  PageContainer,
  PageContents,
  PageHeader,
  PartyMemberList,
  CardTemplate,
} from 'components/Common';
import RuleContainer from 'components/Common/Rule';
import PartyShareAccount from 'components/MyParty/PartyShareAccount';

const MyPartyDetailPage = () => {
  const { userId } = useAuthState();
  const MY_USER_ID = userId;

  const params = useParams();
  const { myPartyId } = params;

  const [partyDetailstate] = useAsync(getMyPartyById, [myPartyId]);
  const { isLoading: isPartyLoading, value: PartyDetail } = partyDetailstate;
  const [sharedInfoState] = useAsync(getSharedAccountInfo, [myPartyId]);
  const { value: sharedInfo } = sharedInfoState;

  const {
    ottName = '',
    grade = '',
    monthlyPrice = 0,
    period = 0,
    members = [],
    rules = [],
    startDate = '',
    endDate = '',
    totalPrice = 0,
    monthlyReimbursement = 0,
    status = '',
  } = PartyDetail || {};

  const checkLeader = members.find(
    ({ userId }) => userId === MY_USER_ID,
  )?.leader;

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
            월 {priceToString(monthlyPrice)}원
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
              총 {priceToString(totalPrice)}원
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

  return !isPartyLoading ? (
    <>
      <PageContainer>
        <PageHeader>
          <PartyTitle
            ottName={ottName}
            ottGrade={grade}
            isLeader={checkLeader}
          />
          {feeRender(checkLeader)}
        </PageHeader>
        <PageContents>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Chip
              label={status === 'RECRUITING' ? '모집중' : '진행중'}
              color={status === 'RECRUITING' ? 'primary' : 'secondary'}
              size="small"
              sx={{ mr: 1 }}
            />
            <Typography variant="small" color="text.secondary">
              {`${startDate}~${endDate}(${period}개월)`}
            </Typography>
          </Box>
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
            {status === 'RECRUITING' ? (
              <CardTemplate blur={true} />
            ) : (
              <PartyShareAccount
                fliped={fliped}
                onFlipCard={handleFlipCard}
                sharedInfo={sharedInfo}
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
  ) : (
    <p>로딩스피너?</p>
  );
};

export default MyPartyDetailPage;
