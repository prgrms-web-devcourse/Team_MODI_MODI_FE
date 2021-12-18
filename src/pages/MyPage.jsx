import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAuthState, useAuthDispatch } from 'contexts/authContext';
import { ModalBox, PageContainer, PageContents } from 'components/Common';

import { USER_INFO_KEY } from 'constants/keys';
import useStorage from 'hooks/useStorage';
import useAsync from 'hooks/useAsync';
import { getAllMyParty, getNewUsername, updateUsername } from 'utils/api';
import MyPageTitle from 'components/MyParty/MyPageTitle';
import MyPartyTab from 'components/MyParty/MyPartyTab';
import UserNameEdit from 'components/MyParty/UserNameEdit';

const LIMIT = 5;

const initialState = {
  parties: [],
  lastPartyId: undefined,
  loadedSize: LIMIT,
  buttonDisabled: true,
};

const MyPage = () => {
  const { onUpdate: onUpdateUserInfo } = useAuthDispatch();
  const { username, points } = useAuthState();
  const { onLogout } = useAuthDispatch();
  const [onGoing, setOnGoing] = useState(initialState);
  const [recruiting, setRecruiting] = useState(initialState);
  const [finished, setFinished] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);

  const [, setUserInfo] = useStorage(USER_INFO_KEY, null, 'session');

  const [generatedUsernameAPIState] = useAsync(getNewUsername, [5]);
  const [, updateUsernameCallback] = useAsync(updateUsername, [], [], true);
  const { value: generatedUsernameValue } = generatedUsernameAPIState || {};

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
      setOnGoing(prevOnGoing => ({
        ...prevOnGoing,
        parties: [...prevOnGoing.parties, ...onGoingState.value.parties],
        buttonDisabled: !onGoingState.value.totalSize,
      }));
    }
  }, [onGoingState.value]);

  useEffect(() => {
    if (recruitingState.value) {
      setRecruiting(prevRecruiting => ({
        ...prevRecruiting,
        parties: [...prevRecruiting.parties, ...recruitingState.value.parties],
        buttonDisabled: !recruitingState.value.totalSize,
      }));
    }
  }, [recruitingState.value]);

  useEffect(() => {
    if (finishedState.value) {
      setFinished(prevFinished => ({
        ...prevFinished,
        parties: [...prevFinished.parties, ...finishedState.value.parties],
        buttonDisabled: !finishedState.value.totalSize,
      }));
    }
  }, [finishedState.value]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleClickCharge = () => {
    navigate(`/charge`);
  };

  const handleClickLogout = () => {
    console.log('logout');
    onLogout();
    navigate('/');
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

  const handleUpdateUsername = selectedUsername => {
    updateUsernameCallback({ username: selectedUsername });
    onUpdateUserInfo({ username: selectedUsername });
    setUserInfo(prevUserInfo => ({
      ...prevUserInfo,
      username: selectedUsername,
    }));
    handleCloseModal();
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
        onClickLogout={handleClickLogout}
        onClickEditButton={() => setIsOpen(true)}
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
      <Modal open={isOpen}>
        <ModalBox>
          <IconButton
            onClick={() => setIsOpen(false)}
            sx={{
              position: 'absolute',
              top: '24px',
              right: '24px',
              p: 0,
            }}
          >
            <CloseIcon />
          </IconButton>
          <UserNameEdit
            username={username}
            generatedUsernameValue={generatedUsernameValue}
            onClose={handleCloseModal}
            onUpdateUsername={handleUpdateUsername}
          />
        </ModalBox>
      </Modal>
    </PageContainer>
  );
};

export default MyPage;
