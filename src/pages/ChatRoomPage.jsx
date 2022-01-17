import { IconButton, Stack, Typography, Divider } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import PageContainer from 'components/Common/PageContainer';
import PageContents from 'components/Common/PageContents';
import PageHeader from 'components/Common/PageHeader';
import { useParams } from 'react-router-dom';
import ChatMessageInput from 'components/Chat/ChatMessageInput';
import ChatMessageBox from 'components/Chat/ChatMessageBox';

const CHAT_ROOM_PAGE_DUMMY_DATA = {
  messageInfos: [
    {
      messageId: 1,
      userId: 1,
      username: '좋은 호랑이',
      time: '오전 12: 23',
      content: '내가 보낸 메세지 입니다.',
    },
    {
      messageId: 2,
      userId: 1,
      username: '좋은 호랑이',
      time: '오전 12: 23',
      content: '내가 보낸 메세지 입니다.',
    },
    {
      messageId: 3,
      userId: 1,
      username: '좋은 호랑이',
      time: '오전 12: 23',
      content: '내가 보낸 메세지 입니다.',
    },
    {
      messageId: 4,
      userId: 2,
      username: '조용한 사슴',
      time: '오전 12: 23',
      content: '메세지 입니다.',
    },
    {
      messageId: 5,
      userId: 2,
      username: '조용한 사슴',
      time: '오전 12: 23',
      content: '메세지 입니다.',
    },
    {
      messageId: 6,
      userId: 3,
      username: '귀여운 고양이',
      time: '오전 12: 24',
      content:
        '국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다. 일반사면을 명하려면 국회의 동의를 얻어야 한다. 헌법에 의한 최초의 대통령의 임기는 이 헌법시행일로부터 개시한다. 모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.',
    },
  ],
};

const ChatRoomPage = () => {
  const { partyId } = useParams();
  console.log(partyId);

  const myUserId = 1;
  const { messageInfos } = CHAT_ROOM_PAGE_DUMMY_DATA;

  const scrollSx = {
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'modiGray.main',
      borderRadius: '5px',
      border: '2px solid modiGray.main',
    },
  };

  return (
    <PageContainer>
      <PageHeader title="조용한 사슴의 넷플릭스">
        <IconButton sx={{ background: 'transparent' }}>
          <ContactSupportIcon />
        </IconButton>
      </PageHeader>
      <PageContents
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 'calc(100vh - 280px)',
        }}
      >
        <Stack
          direction="column-reverse"
          sx={{
            overflowY: 'scroll',
            mb: 1,
            ...scrollSx,
          }}
        >
          {messageInfos.map(
            ({ userId, username, time, content, messageId }) => (
              <ChatMessageBox
                username={username}
                time={time}
                content={content}
                myMessage={userId === myUserId}
                key={messageId}
              />
            ),
          )}

          <Divider
            sx={{
              py: 3,
            }}
          >
            <Typography variant="micro" component="div">
              2022년 1월 15일 토요일
            </Typography>
          </Divider>
        </Stack>
        <ChatMessageInput
          sx={{
            zIndex: 1000,
          }}
        />
      </PageContents>
    </PageContainer>
  );
};

export default ChatRoomPage;
