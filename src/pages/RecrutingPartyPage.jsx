import { useState, useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button, IconButton, Modal } from '@mui/material';
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

const SIZE = 4;

const RecrutingPartyPage = () => {
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

  const [open, setOpen] = useState(false);

  const handleClickMoreButton = useCallback(() => {
    fetchRecruitingPartyListAPI(ottServiceId, SIZE, lastPartyId);
  }, [fetchRecruitingPartyListAPI, ottServiceId, lastPartyId]);

  const handleOpen = useCallback(
    partyId => {
      fetchPartyDetailApiState(partyId);
      setOpen(true);
    },
    [fetchPartyDetailApiState],
  );

  const handleClose = useCallback(() => {
    setOpen(false);
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
          <PartyList parties={currPartyList} onClickParty={handleOpen} />
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
      <Modal open={open} onClose={handleClose}>
        <ModalBox>
          <IconButton
            onClick={handleClose}
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
    </>
  );
};

export default RecrutingPartyPage;
