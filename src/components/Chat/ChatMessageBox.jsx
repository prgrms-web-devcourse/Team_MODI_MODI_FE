import { useTheme } from '@emotion/react';
import { Box, Paper, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import LetterAvatar from './LetterAvatar';

const ChatMessageBox = ({ username, content, time, myMessage }) => {
  const theme = useTheme();
  const othersMessageBackgroundColor =
    theme.palette.mode === 'light' ? 'modiGray.light' : 'modiGray.main';
  const color = myMessage ? 'primary.main' : othersMessageBackgroundColor;

  return (
    <Stack direction={`row${myMessage ? '-reverse' : ''}`} my={1}>
      {!myMessage && <LetterAvatar>{username}</LetterAvatar>}
      <Box ml={1.5} mr={1}>
        {!myMessage && <Typography variant="smallB">{username}</Typography>}
        <Stack
          direction={`row${myMessage ? '-reverse' : ''}`}
          alignItems="flex-end"
        >
          <Paper
            elevation={0}
            sx={{
              mt: 0.5,
              px: 2,
              py: 1,
              backgroundColor: color,
              width: 'fit-content',
            }}
          >
            <Typography variant="small">{content}</Typography>
          </Paper>
          <Typography variant="micro" mx={1} sx={{ whiteSpace: 'nowrap' }}>
            {time}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

ChatMessageBox.propTypes = {
  username: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string,
  myMessage: PropTypes.bool,
};

export default ChatMessageBox;
