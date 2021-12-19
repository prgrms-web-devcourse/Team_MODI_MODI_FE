import {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
} from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button, IconButton, Modal } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
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
import PartyNoneItem from 'components/PartyJoin/PartyNoneItem';
import { useAuthState } from 'contexts/authContext';
import Alert from 'components/Common/Alert';

const SIZE = 4;

const RecrutingPartyPage = () => {
  const { userId: myUserId } = useAuthState();
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
  const [totalPartySize, setTotalpartySize] = useState(0);
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

  useLayoutEffect(() => {
    if (partyListValue) {
      const { partyList, totalSize } = partyListValue;

      setTotalpartySize(totalSize);

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
          <PageHeader title={ottNameKr} hasLogo>
            <Button
              type="button"
              size="small"
              variant="contained"
              color="secondary"
              onClick={handleNavigateCreatePage}
              endIcon={<AddCircleIcon />}
            >
              파티
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
          {partyListLoading && <h1>로딩중</h1>}
          {!partyListLoading &&
            (currPartyList.length !== 0 ? (
              <PartyList
                parties={currPartyList}
                onClickParty={handleFetchPartyDetail}
              />
            ) : (
              <PartyNoneItem />
            ))}

          {partyListError && <div>에러</div>}
          {totalPartySize !== currPartyList.length && (
            <Button
              variant="contained"
              size="small"
              color="modiGray"
              onClick={handleClickMoreButton}
            >
              더보기
            </Button>
          )}
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
      <Alert
        isOpen={isOpenAlreadyJoinAlert}
        type="fail"
        messege="내가 이미 가입한 파티에요"
        helperText="아직 파티원을 모집 중입니다."
        onClose={() => setOpenAlreadyJoinAlert(false)}
      />
    </>
  );
};

export default RecrutingPartyPage;
