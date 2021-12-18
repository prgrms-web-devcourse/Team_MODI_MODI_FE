import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import ChipList from 'components/Common/ChipList';

const UserNameEdit = ({
  username,
  generatedUsernameValue,
  onUpdateUsername,
}) => {
  const [selectedUsername, setSelectedUsername] = useState('');

  const handleClickUsername = username => {
    setSelectedUsername(username);
  };

  const handleClickUpdate = () => {
    onUpdateUsername(selectedUsername);
  };

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
        onClick={handleClickUpdate}
      >
        수정하기
      </Button>
    </Box>
  );
};

UserNameEdit.propTypes = {
  username: PropTypes.string,
  generatedUsernameValue: PropTypes.object,
  onUpdateUsername: PropTypes.func,
};

export default UserNameEdit;
