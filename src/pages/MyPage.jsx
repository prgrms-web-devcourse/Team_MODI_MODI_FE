import { Avatar, Box, Button, Typography } from '@mui/material';
import { priceToString } from 'utils/priceToString';
import { PageContainer, PageContents } from 'components/Common';
import MyPartyTab from 'components/MyParty/MyPartyTab';
import { LogoutOutlined } from '@mui/icons-material';
import useAsync from 'hooks/useAsync';
import { getAllMyParty, getMyInfo } from 'utils/api';
import { useNavigate } from 'react-router';
import { finishedParties, onGoingParties } from 'constants/myPageDummyData';
import { useEffect, useState } from 'react';

const LIMIT = 5;

const MyPage = () => {
  const [lastPartyId, setLastPartyId] = useState();
  const [userState] = useAsync(getMyInfo());
  const [recruitingState] = useAsync(
    getAllMyParty('RECRUITING', LIMIT, lastPartyId),
    [lastPartyId],
  );
  const [recruitingParties, setRecruitingParties] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (recruitingState.value) {
      if (recruitingState.value.parties.length < LIMIT) {
        setButtonDisabled(true);
      }
      setRecruitingParties([
        ...recruitingParties,
        ...recruitingState.value.parties,
      ]);
    }
  }, [recruitingState.value]);

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

  const handleClickMoreButton = () => {
    const newLastPartyId = recruitingState.value.parties[LIMIT - 1].partyId;
    setLastPartyId(newLastPartyId);
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
        {/* <MyPartyTab
          onGoingParties={onGoingState.value.parties}
          recruitingParties={recruitingState.value.parties}
          finishedParties={finishedState.value.parties}
          onClickParty={handleClickParty}
        /> */}

        <MyPartyTab
          onGoingParties={onGoingParties}
          recruitingParties={recruitingParties}
          finishedParties={finishedParties}
          onClickParty={handleClickParty}
        />

        <Button
          variant="contained"
          size="small"
          color="modiGray"
          disabled={buttonDisabled}
          onClick={handleClickMoreButton}
        >
          더보기
        </Button>
      </PageContents>
    </PageContainer>
  );
};

export default MyPage;
