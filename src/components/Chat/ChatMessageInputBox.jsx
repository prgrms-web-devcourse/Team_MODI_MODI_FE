import { Box, IconButton, InputBase } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const ChatMessageInputBox = () => {
  const [message, setMessage] = useState('');

  const handleSetMessage = e => {
    setMessage(e.target.value);
  };

  const handleSendMessage = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log(message);
      setMessage('');
      e.target.value = '';
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '24px',
        width: 'calc(100% - 48px)',
        backgroundColor: '#eeeeee',
        pl: 2.5,
        py: 0.5,
        borderRadius: 4,
        '&:focus-within': {
          outline: '2.5px solid #B2cc16',
        },
      }}
    >
      <InputBase
        placeholder="메세지를 입력하세요."
        defaultValue={message}
        maxRows={10}
        onChange={handleSetMessage}
        onKeyDown={handleSendMessage}
        multiline
        fullWidth
        autoFocus
      />
      <IconButton
        type="submit"
        sx={{
          alignSelf: 'flex-start',
          background: 'transparent',
          color: 'primary.main',
        }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatMessageInputBox;
