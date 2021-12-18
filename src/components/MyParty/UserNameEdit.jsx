import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { RuleList } from 'components/Common';
import useAsync from 'hooks/useAsync';
import { getNewUsername, updateUsername } from 'utils/api';
import ChipList from 'components/Common/ChipList';

const UserNameEdit = ({ username }) => {
  const [generatedUsernameAPIState] = useAsync(getNewUsername, [5]);
  const [selectedUsername, setSelectedUsername] = useState('');
  const [updateUsernameAPIState, updateUsernameCallback] = useAsync(
    updateUsername,
    [],
    [],
    true,
  );

  const {
    isLoading: generatedLoading,
    value: generatedUsernameValue,
    error: generatedUsernameError,
  } = generatedUsernameAPIState || {};

  const handleClickUsername = username => {
    setSelectedUsername(username);
  };

  const handleUpdateUsername = () => {
    updateUsernameCallback({ username: selectedUsername });
  };
  useEffect(() => {
    console.log(generatedUsernameValue);
  }, [generatedUsernameValue]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          m: 5,
        }}
      >
        <Typography>현재 닉네임</Typography>
        <Typography variant="h5">{username}</Typography>
      </Box>

      <Box
        sx={{
          mb: 5,
        }}
      >
        <Typography>수정할 닉네임</Typography>
        {generatedUsernameValue && (
          <ChipList
            items={generatedUsernameValue.generatedUsernames}
            selectedUsername={selectedUsername}
            onClickChip={handleClickUsername}
          />
        )}
      </Box>

      <Button
        variant="contained"
        sx={{
          width: '30%',
        }}
        disabled={!selectedUsername}
        onClick={handleUpdateUsername}
      >
        수정하기
      </Button>
    </Box>
  );
};

UserNameEdit.propTypes = {
  username: PropTypes.string,
};

export default UserNameEdit;
