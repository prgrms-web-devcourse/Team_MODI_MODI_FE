import { IconButton } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import PageContainer from 'components/Common/PageContainer';
import PageContents from 'components/Common/PageContents';
import PageHeader from 'components/Common/PageHeader';
import { useParams } from 'react-router-dom';
import ChatMessageInputBox from 'components/Chat/ChatMessageInputBox';

const ChatRoomPage = () => {
  const { partyId } = useParams();

  return (
    <PageContainer>
      <PageHeader title="조용한 사슴의 넷플릭스">
        <IconButton sx={{ background: 'transparent' }}>
          <ContactSupportIcon />
        </IconButton>
      </PageHeader>
      <PageContents>
        <ChatMessageInputBox />
        {/* <Box
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
            maxRows={10}
            multiline
            fullWidth
            autoFocus
          />
          <IconButton
            sx={{
              alignSelf: 'flex-start',
              background: 'transparent',
              color: 'primary.main',
            }}
          >
            <SendIcon />
          </IconButton>
        </Box> */}
      </PageContents>
    </PageContainer>
  );
};

export default ChatRoomPage;
