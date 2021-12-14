import { Avatar, Box, Button, Typography } from '@mui/material';
import { priceToString } from 'utils/priceToString';
import { PageContainer, PageContents } from 'components/Common';
import MyPartyTab from 'components/MyParty/MyPartyTab';
import { LogoutOutlined } from '@mui/icons-material';
import useAsync from 'hooks/useAsync';
import { getAllMyParty, getMyInfo } from 'utils/api';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

const LIMIT = 3;

const initialState = {
  parties: [],
  lastPartyId: undefined,
  // buttonDisabled: false,
};

const MyPage = () => {
  const [onGoing, setOnGoing] = useState(initialState);
  const [recruiting, setRecruiting] = useState(initialState);
  const [finished, setFinished] = useState(initialState);

  const [userState] = useAsync(getMyInfo());

  const [onGoingState] = useAsync(
    getAllMyParty('ONGOING', LIMIT, onGoing.lastPartyId),
    [onGoing.lastPartyId],
  );
  const [recruitingState] = useAsync(
    getAllMyParty('RECRUITING', LIMIT, recruiting.lastPartyId),
    [recruiting.lastPartyId],
  );
  const [finishedState] = useAsync(
    getAllMyParty('FINISHED', LIMIT, finished.lastPartyId),
    [finished.lastPartyId],
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (onGoingState.value) {
      setOnGoing({
        ...onGoing,
        parties: [...onGoing.parties, ...onGoingState.value.parties],
      });
    }
  }, [onGoingState.value]);

  useEffect(() => {
    if (recruitingState.value) {
      setRecruiting({
        ...recruiting,
        parties: [...recruiting.parties, ...recruitingState.value.parties],
      });
    }
  }, [recruitingState.value]);

  useEffect(() => {
    if (finishedState.value) {
      setFinished({
        ...finished,
        parties: [...finished.parties, ...finishedState.value.parties],
      });
    }
  }, [finishedState.value]);

  if (!userState.value) {
    return <></>;
  }
  const { username, points = 0 } = userState.value;

  const handleClickCharge = () => {
    navigate(`/charge`);
  };

  const handleLogOut = () => {
    // context API 적용 후 onLogout 을 통해 상태 관리 예정
  };

  const handleClickParty = partyId => {
    navigate(`/myParty/${partyId}`);
  };

  const handleClickMoreButton = status => {
    let partiesLength = 0;
    let lastPartyId = 0;
    switch (status) {
      case 'onGoing':
        partiesLength = onGoingState.value.parties.length;

        if (partiesLength && partiesLength === LIMIT) {
          lastPartyId = onGoingState.value.parties[LIMIT - 1].partyId;
          setOnGoing({
            ...onGoing,
            lastPartyId,
          });
        }
        break;
      case 'recruiting':
        partiesLength = recruitingState.value.parties.length;

        if (partiesLength && partiesLength === LIMIT) {
          lastPartyId = recruitingState.value.parties[LIMIT - 1].partyId;
          setRecruiting({
            ...recruiting,
            lastPartyId,
          });
        }
        break;
      case 'finished':
        partiesLength = finishedState.value.parties.length;

        if (partiesLength && partiesLength === LIMIT) {
          lastPartyId = finishedState.value.parties[LIMIT - 1].partyId;
          setFinished({
            ...finished,
            lastPartyId,
          });
        }
        break;
      default:
    }
  };

  return (
    <PageContainer
      sx={{
        mt: 7,
        bgcolor: 'secondary.main',
      }}
    >
      <Box>
        <Box
          sx={{
            p: 1,
            m: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography color="primary.contrastText" variant="mediumB">
              안녕하세요, {username}님
            </Typography>
            <LogoutOutlined
              style={{
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={handleLogOut}
            />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            color="primary.contrastText"
            variant="microB"
            component="p"
          >
            나의 포인트
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="visual"
              style={{
                marginRight: 10,
                fontSize: 50,
                color: '#F0E07E',
              }}
            >
              {priceToString(points)}
            </Typography>
            <Avatar
              style={{
                paddingLeft: 2,
                width: 25,
                height: 25,
                fontSize: 15,
                fontWeight: 700,
                backgroundColor: '#668F90',
              }}
            >
              P
            </Avatar>
          </Box>
          <Button
            variant="contained"
            sx={{
              m: 2,
            }}
            style={{
              backgroundColor: '#7FBDBE',
              minWidth: '40%',
              height: 40,
            }}
            onClick={handleClickCharge}
          >
            충전하기
          </Button>
        </Box>
      </Box>
      <PageContents
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'white',
        }}
      >
        <MyPartyTab
          onGoingParties={onGoing.parties}
          recruitingParties={recruiting.parties}
          finishedParties={finished.parties}
          onClickParty={handleClickParty}
          onClickMoreButton={handleClickMoreButton}
        />
      </PageContents>
    </PageContainer>
  );
};

export default MyPage;
