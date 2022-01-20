import { Box, IconButton, List, Typography } from '@mui/material';
import NoticeItem from './NoticeItem';
import ScrollWrapper from './../ScrollWrapper';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const NoticeList = ({ onClickClose }) => {
  const notificationResponses = [
    {
      id: 1,
      content: '공유계정 정보가 변경 되었습니다.',
      createdAt: '2022-01-18T16:25:23.065224',
      readCheck: false,
      partyId: '1',
      partyLeaderName: '귀여운 강아지',
      ottName: '넷플릭스',
    },
    {
      id: 2,
      content: '공유계정 정보가 변경되었습니다.',
      createdAt: '2022-01-18T16:25:22.493746',
      readCheck: false,
      partyId: 9,
      partyLeaderName: '싫은 뻐꾸기',
      ottName: '넷플릭스',
    },
    {
      id: 3,
      content: '공유계정 정보가 변경되었습니다.',
      createdAt: '2022-01-18T16:25:23.065224',
      readCheck: false,
      partyId: 9,
      partyLeaderName: '싫은 뻐꾸기',
      ottName: '넷플릭스',
    },
    {
      id: 4,
      content: '공유계정 정보가 변경되었습니다.',
      createdAt: '2022-01-18T16:25:23.603224',
      readCheck: false,
      partyId: 9,
      partyLeaderName: '싫은 뻐꾸기',
      ottName: '넷플릭스',
    },
    {
      id: 5,
      content: '싫은 뻐꾸기님이 파티원으로 참여했습니다.',
      createdAt: '2022-01-18T16:29:50.037277',
      readCheck: false,
      partyId: 10,
      partyLeaderName: '질긴 코알라',
      ottName: '넷플릭스',
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
          {notificationResponses.map(notice => (
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
};
