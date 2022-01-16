import { IconButton, InputBase, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const ChatMessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSetMessage = e => {
    setMessage(e.target.value);
  };

  const handleSendMessage = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(message);
      setMessage('');
    }
  };

  const handleClickSendButton = e => {
    console.log(message);
    setMessage('');
  };

  return (
    <Stack
      justifyContent="center"
      flexDirection="row"
      pl={2.5}
      py={0.5}
      sx={{
        width: '100%',
        backgroundColor: '#eeeeee',
        borderRadius: 4,
        zIndex: 1000,
        '&:focus-within': {
          outline: '3px solid #B2cc16',
        },
      }}
    >
      <InputBase
        placeholder="메세지를 입력하세요."
        value={message}
        maxRows={5}
        onChange={handleSetMessage}
        onKeyDown={handleSendMessage}
        multiline
        fullWidth
        autoFocus
      />
      <IconButton
        type="submit"
        sx={{
          alignSelf: 'flex-end',
          background: 'transparent',
          color: 'primary.main',
        }}
        onClick={handleClickSendButton}
      >
        <SendIcon />
      </IconButton>
    </Stack>
  );
};

export default ChatMessageInput;
