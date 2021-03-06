import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Button, IconButton, Typography } from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import ChipList from 'components/Common/ChipList';
import catLoaderLottie from 'assets/cat-loader-lottie.json';

const UserNameEdit = ({
  username,
  generatedUsernameLoading,
  generatedUsernameValue,
  onUpdateUsername,
  onClickShuffle,
}) => {
  const [selectedUsername, setSelectedUsername] = useState('');
  const lottieIcon = useRef();
  useEffect(() => {
    const animate = lottie.loadAnimation({
      container: lottieIcon.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: catLoaderLottie,
    });
    animate.setSpeed(4);
  }, [generatedUsernameLoading]);
  const handleClickUsername = username => {
    setSelectedUsername(username);
  };

  const handleClickUpdate = () => {
    onUpdateUsername(selectedUsername);
  };

  const handleShuffleUsername = () => {
    setSelectedUsername('');
    onClickShuffle();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        wordBreak: 'keep-all',
      }}
    >
      <Typography>현재 닉네임</Typography>
      <Typography variant="h5">{username}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 5,
          mb: 5,
        }}
      >
        <Typography>수정할 닉네임</Typography>
        <IconButton
          color="primary"
          tooltip="닉네임 셔플"
          onClick={handleShuffleUsername}
        >
          <CachedIcon />
        </IconButton>
        {generatedUsernameLoading && (
          <Box
            ref={lottieIcon}
            sx={{
              height: '20vh',
            }}
          />
        )}
        {!generatedUsernameLoading && generatedUsernameValue && (
          <ChipList
            items={generatedUsernameValue.generatedUsernames}
            selectedUsername={selectedUsername}
            onClickChip={handleClickUsername}
          />
        )}
      </Box>
      <Button
        variant="contained"
        sx={{ width: '30%' }}
        style={{ minWidth: '140px' }}
        disabled={!selectedUsername}
        onClick={handleClickUpdate}
      >
        수정하기
      </Button>
    </Box>
  );
};

UserNameEdit.propTypes = {
  username: PropTypes.string,
  generatedUsernameLoading: PropTypes.bool,
  generatedUsernameValue: PropTypes.object,
  onUpdateUsername: PropTypes.func,
  onClickShuffle: PropTypes.func,
};

export default UserNameEdit;
