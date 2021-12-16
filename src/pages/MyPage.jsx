import { PageContainer, PageContents } from 'components/Common';
import MyPartyTab from 'components/MyParty/MyPartyTab';
import useAsync from 'hooks/useAsync';
import { getAllMyParty } from 'utils/api';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import MyPageTitle from 'components/MyParty/MyPageTitle';
import { useAuthState } from 'contexts/authContext';

const LIMIT = 3;

const initialState = {
  parties: [],
  lastPartyId: undefined,
  loadedSize: LIMIT,
  buttonDisabled: true,
};

const MyPage = () => {
  const { username, points } = useAuthState();
  const [onGoing, setOnGoing] = useState(initialState);
  const [recruiting, setRecruiting] = useState(initialState);
  const [finished, setFinished] = useState(initialState);

  const [onGoingState] = useAsync(
    getAllMyParty,
    ['ONGOING', LIMIT, onGoing.lastPartyId],
    [onGoing.lastPartyId],
  );
  const [recruitingState] = useAsync(
    getAllMyParty,
    ['RECRUITING', LIMIT, recruiting.lastPartyId],
    [recruiting.lastPartyId],
  );
  const [finishedState] = useAsync(
    getAllMyParty,
    ['FINISHED', LIMIT, finished.lastPartyId],
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
      const { totalSize, parties } = recruitingState.value;
      setRecruiting({
        ...recruiting,
        parties: [...recruiting.parties, ...parties],
        buttonDisabled: !totalSize,
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

  const handleClickCharge = () => {
    navigate(`/charge`);
  };

  const handleClickParty = partyId => {
    navigate(`/myParty/${partyId}`);
  };
  const handleClickMoreButton = status => {
    switch (status) {
      case 'onGoing':
        if (onGoing.loadedSize + LIMIT > onGoingState.value.totalSize) {
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
        if (recruiting.loadedSize + LIMIT > recruitingState.value.totalSize) {
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
          onGoingButtonState={onGoing.buttonDisabled}
          recruitingButtonState={recruiting.buttonDisabled}
          finishedButtonState={finished.buttonDisabled}
          onClickParty={handleClickParty}
          onClickMoreButton={handleClickMoreButton}
        />
      </PageContents>
    </PageContainer>
  );
};

export default MyPage;
