import { useState, useCallback } from 'react';
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
import { RECRUITING_PARTY_DUMMY_DATA } from 'constants/mockData/recruitingPartyDummy';
import { PARTY_DETAIL_DUMMY } from 'constants/mockData/parttDetailDummy';

const ottNameToKr = {
  netflix: '넷플릭스',
  disneyPlus: '디즈니 플러스',
  wavve: '웨이브',
  watcha: '왓챠',
  tving: '티빙',
  laftel: '라프텔',
  coupangPlay: '쿠팡 플레이',
  amazonPrime: '아마존 프라임',
};

const RecrutingPartyPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { ottServiceName } = params;

  const initialParties = RECRUITING_PARTY_DUMMY_DATA.slice(0, 5);
  const additionalParties = RECRUITING_PARTY_DUMMY_DATA.slice(5, 10);
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
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleNavigateCreatePage = useCallback(() => {
    navigate(`/create?ott=${ottServiceName}`);
  }, [navigate, ottServiceName]);

  return (
    <>
      <PageContainer>
        <PageHeader title={ottNameToKr[ottServiceName]} hasLogo size={72}>
          <Button
            type="button"
            size="small"
            variant="outlined"
            onClick={handleNavigateCreatePage}
          >
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
          <PartyDetail partyDetail={PARTY_DETAIL_DUMMY} myPoint={myPoint} />
        </ModalBox>
      </Modal>
    </>
  );
};

export default RecrutingPartyPage;
