import { Box, IconButton, List, Typography } from '@mui/material';
import NoticeItem from './NoticeItem';
import ScrollWrapper from './../ScrollWrapper';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const NoticeList = ({ onClickClose }) => {
  const notices = [
    {
      noticeId: 1,
      partyId: '1',
      partyLeader: '귀여운 강아지',
      ottName: '넷플릭스',
      time: '21/01/11',
      message: '공유계정 정보가 변경 되었습니다.',
    },
    {
      noticeId: 2,
      partyId: '1',
      partyLeader: '귀여운 강아지',
      ottName: '넷플릭스',
      time: '21/01/11',
      message: '공유계정 정보가 변경 되었습니다.',
    },
    {
      noticeId: 3,
      partyId: '1',
      partyLeader: '귀여운 강아지',
      ottName: '넷플릭스',
      time: '21/01/11',
      message: '공유계정 정보가 변경 되었습니다.',
    },
    {
      noticeId: 4,
      partyId: '1',
      partyLeader: '귀여운 강아지',
      ottName: '넷플릭스',
      time: '21/01/11',
      message: '공유계정 정보가 변경 되었습니다.',
    },
    {
      noticeId: 5,
      partyId: '1',
      partyLeader: '귀여운 강아지',
      ottName: '넷플릭스',
      time: '21/01/11',
      message: '공유계정 정보가 변경 되었습니다.',
    },
    {
      noticeId: 6,
      partyId: '1',
      partyLeader: '귀여운 강아지',
      ottName: '넷플릭스',
      time: '21/01/11',
      message: '공유계정 정보가 변경 되었습니다.',
    },
    {
      noticeId: 7,
      partyId: '1',
      partyLeader: '귀여운 강아지',
      ottName: '넷플릭스',
      time: '21/01/11',
      message: '공유계정 정보가 변경 되었습니다.',
    },
  ];

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
          {notices.map(notice => (
            <NoticeItem key={notice.noticeId} notice={notice} />
          ))}
        </List>
      </ScrollWrapper>
    </Box>
  );
};

export default NoticeList;

NoticeList.propTypes = {
  onClickClose: PropTypes.func,
};
