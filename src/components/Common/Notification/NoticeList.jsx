import { Box, IconButton, List, Typography } from '@mui/material';
import NoticeItem from './NoticeItem';
import ScrollWrapper from './../ScrollWrapper';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const NoticeList = ({ onClickClose, notifications }) => {
  return (
    <Box
      sx={{
        padding: '24px',
        background: '#fff',
        maxWidth: '375px',
        maxHeight: '470px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="large" component="h2">
          알림
        </Typography>
        <IconButton component="span" sx={{ p: 0 }} onClick={onClickClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <ScrollWrapper>
        <List>
          {notifications.map(notice => (
            <NoticeItem key={notice.id} notice={notice} />
          ))}
        </List>
      </ScrollWrapper>
    </Box>
  );
};

export default NoticeList;

NoticeList.propTypes = {
  onClickClose: PropTypes.func,
  notifications: PropTypes.array,
};
