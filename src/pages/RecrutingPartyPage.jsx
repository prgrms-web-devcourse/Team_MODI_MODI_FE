import { useState, useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Box, Button, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import {
  PageHeader,
  PageContainer,
  PageContents,
  ModalBox,
} from 'components/Common';
import { PartyList, PartyDetail } from 'components/PartyJoin';
import { useOttInfoState } from 'contexts/OttInfoProvider';
import useAsync from 'hooks/useAsync';
import { getPartyDetail, getRecruitingParties } from 'utils/api';
import { useAuthState } from 'contexts/authContext';
import Alert from 'components/Common/Alert';

const SIZE = 4;

const RecrutingPartyPage = () => {
  const { isLoggedIn, userId: myUserId } = useAuthState();
  const navigate = useNavigate();
  const params = useParams();
  const ottServiceId = useMemo(() => parseInt(params.ottServiceId), [params]);
  const { ottServices } = useOttInfoState();
  const ottNameKr = useMemo(
    () => ottServices?.find(({ ottId }) => ottId === ottServiceId)?.ottName,
    [ottServices, ottServiceId],
  );

  const [lastPartyId, setLastPartyId] = useState(null);
  const [currPartyList, setCurrPartyList] = useState([]);
  const [isOpenPartyInfoModal, setOpenPartyInfoModal] = useState(false);
  const [isOpenAlreadyJoinAlert, setOpenAlreadyJoinAlert] = useState(false);

  const [recruitingPartyListAPIState, fetchRecruitingPartyListAPI] = useAsync(
    getRecruitingParties,
    [ottServiceId, SIZE],
    [],
  );
  const [partyDetailApiState, fetchPartyDetailApiState] = useAsync(
    getPartyDetail,
    [],
    [],
    true,
  );

  const {
    isLoading: partyListLoading,
    value: partyListValue,
    error: partyListError,
  } = recruitingPartyListAPIState;

  const {
    isLoading: partyDetailLoading,
    value: partyDetailValue,
    error: partyDetailError,
  } = partyDetailApiState;

  useEffect(() => {
    if (partyListValue) {
      const { partyList } = partyListValue;

      setCurrPartyList(prevPartyList => {
        return partyList.length
          ? [...prevPartyList, ...partyList]
          : prevPartyList;
      });
      setLastPartyId(prevLastPartyId => {
        return partyList.length
          ? partyList[partyList.length - 1].partyId
          : prevLastPartyId;
      });
    }
  }, [partyListValue]);

  useEffect(() => {
    if (partyDetailValue) {
      const { members } = partyDetailValue;
      const isAlreadySignedInParty = members.some(
        ({ userId }) => userId === myUserId,
      );
      isAlreadySignedInParty
        ? setOpenAlreadyJoinAlert(true)
        : setOpenPartyInfoModal(true);
    }
  }, [partyDetailValue, myUserId]);

  const handleClickMoreButton = useCallback(() => {
    fetchRecruitingPartyListAPI(ottServiceId, SIZE, lastPartyId);
  }, [fetchRecruitingPartyListAPI, ottServiceId, lastPartyId]);

  const handleFetchPartyDetail = useCallback(
    partyId => {
      fetchPartyDetailApiState(partyId);
    },
    [fetchPartyDetailApiState],
  );

  const handleClosePartyInfoModal = useCallback(() => {
    setOpenPartyInfoModal(false);
  }, []);

  const handleNavigateCreatePage = useCallback(() => {
    navigate(`/create?ottId=${ottServiceId}`);
  }, [navigate, ottServiceId]);

  return (
    <>
      <PageContainer>
        {ottNameKr && (
          <PageHeader title={ottNameKr} hasLogo size={72}>
            <Button
              type="button"
              size="small"
              variant="outlined"
              onClick={handleNavigateCreatePage}
            >
              +파티
            </Button>
          </PageHeader>
        )}
        <PageContents
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <PartyList
            parties={currPartyList}
            onClickParty={handleFetchPartyDetail}
          />
          {partyListLoading && <h1>로딩중</h1>}
          {partyListError && <div>에러</div>}
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
      <Modal open={isOpenPartyInfoModal} onClose={handleClosePartyInfoModal}>
        <ModalBox>
          <IconButton
            onClick={handleClosePartyInfoModal}
            sx={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              p: 0,
            }}
          >
            <CloseIcon />
          </IconButton>
          {partyDetailLoading && <div>로딩중...</div>}
          {partyDetailValue && <PartyDetail partyDetail={partyDetailValue} />}
          {partyDetailError && <div>에러</div>}
        </ModalBox>
      </Modal>
      <Modal
        open={isOpenAlreadyJoinAlert}
        onClose={() => setOpenAlreadyJoinAlert(false)}
      >
        <Box>
          <Alert
            messege="응 안돼"
            helperText="돌아가"
            onClose={() => setOpenAlreadyJoinAlert(false)}
          />
        </Box>
      </Modal>
    </>
  );
};

export default RecrutingPartyPage;
