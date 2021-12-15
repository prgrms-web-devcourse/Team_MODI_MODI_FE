import { PageContainer, PageContents } from 'components/Common';
import MyPartyTab from 'components/MyParty/MyPartyTab';
import useAsync from 'hooks/useAsync';
import { getAllMyParty, getMyInfo } from 'utils/api';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import MyPageTitle from 'components/MyParty/MyPageTitle';

const LIMIT = 3;

const initialState = {
  parties: [],
  lastPartyId: undefined,
  loadedSize: 3,
  buttonDisabled: false,
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
      console.log(onGoingState.value);
      setOnGoing({
        ...onGoing,
        parties: [...onGoing.parties, ...onGoingState.value.parties],
      });
    }
  }, [onGoingState.value]);

  useEffect(() => {
    if (recruitingState.value) {
      console.log(recruitingState.value);

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

  const { username, points = 0 } = userState.value || [];

  const handleClickCharge = () => {
    navigate(`/charge`);
  };

  const handleLogOut = () => {
    console.log('logout');
    // context API 적용 후 onLogout 을 통해 상태 관리 예정
  };

  const handleClickParty = partyId => {
    navigate(`/myParty/${partyId}`);
  };
  const handleClickMoreButton = status => {
    switch (status) {
      case 'onGoing':
        console.log(onGoing.loadedSize);
        if (onGoing.loadedSize + LIMIT > onGoingState.value.totalSize) {
          console.log('버튼 삭제');
          // 버튼 없애기
          setOnGoing({
            ...onGoing,
            buttonDisabled: true,
          });
        } else {
          setOnGoing({
            ...onGoing,
            loadedSize: onGoing.loadedSize + LIMIT,
            lastPartyId: onGoingState.value.parties[LIMIT - 1].partyId,
          });
        }
        break;
      case 'recruiting':
        console.log(recruiting.loadedSize);

        if (recruiting.loadedSize + LIMIT > recruitingState.value.totalSize) {
          console.log('버튼 삭제');

          // 버튼 없애기
          setRecruiting({
            ...recruiting,
            buttonDisabled: true,
          });
        } else {
          setRecruiting({
            ...recruiting,
            loadedSize: recruiting.loadedSize + LIMIT,
            lastPartyId: recruitingState.value.parties[LIMIT - 1].partyId,
          });
        }
        break;
      case 'finished':
        if (finished.loadedSize + LIMIT > finishedState.value.totalSize) {
          console.log('버튼 삭제');

          setFinished({
            ...recruiting,
            buttonDisabled: true,
          });
        } else {
          setFinished({
            ...finished,
            loadedSize: onGoing.loadedSize + LIMIT,
            lastPartyId: finishedState.value.parties[LIMIT - 1].pargyId,
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
      <MyPageTitle
        username={username}
        points={points}
        onClickLogout={handleLogOut}
        onClickCharge={handleClickCharge}
      />
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
