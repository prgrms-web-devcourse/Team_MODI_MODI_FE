import { useCallback, useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Box, Button, Chip, Divider, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import {
  getMyPartyById,
  getSharedAccountInfo,
  updateSharedInfo,
  deleteParty,
} from 'utils/api';
import useAsync from 'hooks/useAsync';
import { useAuthState } from 'contexts/authContext';
import { priceToString } from 'utils/priceToString';
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
import { parseDate } from 'utils/parseDate';
import SharedInfoEditModal from 'components/Common/SharedInfoEditModal';
import MyPartyDetailSkeleton from 'components/Skeleton/MyPartyDetailSkeleton';

const MyPartyDetailPage = () => {
  const { userId: loginUserId } = useAuthState();
  const navigate = useNavigate();

  const params = useParams();
  const { myPartyId } = params;

  const [isOpen, setIsOpen] = useState(false);

  const [partyDetailstate] = useAsync(getMyPartyById, [myPartyId]);
  const [sharedInfoState, fetchSharedInfo] = useAsync(getSharedAccountInfo, [
    myPartyId,
  ]);
  const [updatedSharedInfoApiState, fetchUpdateShareInfoApiState] = useAsync(
    updateSharedInfo,
    [],
    [],
    true,
  );
  const [deletePartyAPIState, fetchDeletePartyAPI] = useAsync(
    deleteParty,
    [],
    [],
    true,
  );
  const { value: updateInfo } = updatedSharedInfoApiState;
  const { isLoading: isPartyLoading, value: partyDetail } = partyDetailstate;

  const { value: sharedInfo } = sharedInfoState;

  const [fliped, setFliped] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    if (updateInfo) {
      fetchSharedInfo();
    }
  }, [updateInfo, fetchSharedInfo]);

  const {
    partyId = 0,
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
  } = partyDetail || {};

  const isLeader = useMemo(
    () => members.find(({ userId }) => userId === loginUserId)?.leader,
    [loginUserId, members],
  );

  const handleFlipCard = useCallback(() => {
    setFliped(prev => !prev);
  }, []);

  const handleEditSharedInfo = useCallback(e => {
    e.stopPropagation();
    setOpenEditModal(true);
  }, []);

  const handleCloseSharedInfo = useCallback(() => {
    setOpenEditModal(false);
  }, []);

  const handlSubmitEditedSharedInfo = useCallback(
    newPassword => {
      fetchUpdateShareInfoApiState(myPartyId, { sharedPassword: newPassword });
    },
    [fetchUpdateShareInfoApiState, myPartyId],
  );

  useEffect(() => {
    deletePartyAPIState.value === '' && navigate('/user');
  }, [deletePartyAPIState.value, navigate]);

  const checkHasMember = members.length - 1;
  const feeRender = isLeader => {
    if (isLeader) {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            ml: 'auto',
            minWidth: '82px',
            flexShrink: 0,
          }}
        >
          <AddCircleOutline color="secondary" fontSize="small" />
          <Typography variant="baseB" ml={0.5}>
            ??? {priceToString(monthlyReimbursement)}???
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
            minWidth: '82px',
            flexShrink: 0,
          }}
        >
          <Typography variant="smallB" component="p">
            ??? {priceToString(monthlyPrice)}???
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
              ??? {priceToString(totalPrice)}???
            </Typography>
          </Box>
        </Box>
      );
    }
  };

  const handleDeleteParty = useCallback(() => {
    fetchDeletePartyAPI(partyId);
  }, [fetchDeletePartyAPI, partyId]);

  return (
    <>
      {isPartyLoading && <MyPartyDetailSkeleton />}
      {partyDetail && (
        <>
          <PageContainer>
            <PageHeader hasLogo title={ottName} sub={grade} isLeader={isLeader}>
              {feeRender(isLeader)}
            </PageHeader>
            <PageContents>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Chip
                  label={status === 'RECRUITING' ? '?????????' : '?????????'}
                  color={status === 'RECRUITING' ? 'primary' : 'secondary'}
                  size="small"
                  sx={{ mr: 1 }}
                />
                <Typography
                  variant="small"
                  color="text.secondary"
                  sx={{ wordBreak: 'keep-all' }}
                >
                  {`${parseDate(startDate)} ~ ${parseDate(
                    endDate,
                  )} (${period}??????)`}
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
                {status === 'RECRUITING' && !isLeader ? (
                  <CardTemplate blur={true} />
                ) : (
                  <PartyShareAccount
                    fliped={fliped}
                    onFlipCard={handleFlipCard}
                    sharedInfo={sharedInfo}
                    partyStatus={status}
                    onEditSharedInfo={handleEditSharedInfo}
                    isLeader={isLeader}
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
              {status === 'RECRUITING' && isLeader && !checkHasMember && (
                <Box
                  sx={{
                    mt: 3,
                    mb: 3,
                    textAlign: 'center',
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    onClick={() => setIsOpen(true)}
                  >
                    ?????? ??????
                  </Button>
                </Box>
              )}
              <Alert
                isOpen={isOpen}
                type={'fail'}
                messege="????????? ?????? ?????????????????????????"
                onClose={() => setIsOpen(false)}
                onClickLeftButton={handleDeleteParty}
                isConfirm={true}
                leftButtonText="?????? ??????"
                rightButtonText="??? ???????????????!"
              />
            </PageContents>
          </PageContainer>
          <SharedInfoEditModal
            open={openEditModal}
            onClose={handleCloseSharedInfo}
            onSubmit={handlSubmitEditedSharedInfo}
          />
        </>
      )}
    </>
  );
};
export default MyPartyDetailPage;
