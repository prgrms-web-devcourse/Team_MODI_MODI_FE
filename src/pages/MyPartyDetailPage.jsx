import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Box, Button, Chip, Divider, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { getMyPartyById, getSharedAccountInfo } from 'utils/api';
import useAsync from 'hooks/useAsync';
import { useAuthState } from 'contexts/authContext';
import { priceToString } from 'utils/priceToString';
import PartyTitle from 'components/PartyTitle';
import Alert from 'components/Common/Alert';
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
  const { userId: loginUserId } = useAuthState();
  const navigate = useNavigate();

  const params = useParams();
  const { myPartyId } = params;

  const [isOpen, setIsOpen] = useState(false);

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
    partyMemberCapacity = 0,
    status = '',
  } = PartyDetail || {};

  const checkLeader = members.find(
    ({ userId }) => userId === loginUserId,
  )?.leader;

  const checkHasMember = members.length - 1;
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

  const handleDeleteParty = useCallback(() => {
    // 삭제 api 요청
    navigate('/user');
  }, [navigate]);

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
            <Alert
              isOpen={isOpen}
              type={'fail'}
              messege="조금만 더 파티원을 기다려보아요!"
              onClose={() => setIsOpen(false)}
              onClickDelete={handleDeleteParty}
              isConfirm={true}
            />
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
          <PartyMemberList
            members={members}
            partyMemberCapacity={partyMemberCapacity}
          />
          <Divider
            sx={{
              mt: 2,
              mb: 1,
            }}
          />
          <RuleContainer rules={rules} sx={{ borderBottom: '0' }} />
          {status === 'RECRUITING' && checkLeader && !checkHasMember && (
            <Box
              sx={{
                m: 3,
                textAlign: 'center',
              }}
            >
              <Button
                variant="contained"
                size="small"
                color="error"
                sx={{
                  margin: '0 auto',
                }}
                onClick={() => setIsOpen(true)}
              >
                파티 삭제
              </Button>
            </Box>
          )}
        </PageContents>
      </PageContainer>
    </>
  ) : (
    <p>로딩스피너?</p>
  );
};

export default MyPartyDetailPage;
