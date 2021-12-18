import { useCallback, useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Chip, Divider, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import {
  getMyPartyById,
  getSharedAccountInfo,
  updateSharedInfo,
} from 'utils/api';
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
import { parseDate } from 'utils/parseDate';
import SharedInfoEditModal from 'components/Common/SharedInfoEditModal';

const MyPartyDetailPage = () => {
  const { userId: loginUserId } = useAuthState();

  const params = useParams();
  const { myPartyId } = params;

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

  return (
    <>
      {isPartyLoading && <p>로딩스피너</p>}
      {partyDetail && (
        <>
          <PageContainer>
            <PageHeader>
              <PartyTitle
                ottName={ottName}
                ottGrade={grade}
                isLeader={isLeader}
              />
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
                  label={status === 'RECRUITING' ? '모집중' : '진행중'}
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
                  )} (${period}개월)`}
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
