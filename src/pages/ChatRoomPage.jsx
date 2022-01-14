import { IconButton } from '@mui/material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import PageContainer from 'components/Common/PageContainer';
import PageContents from 'components/Common/PageContents';
import PageHeader from 'components/Common/PageHeader';
import { useParams } from 'react-router-dom';

const ChatRoomPage = () => {
  const { partyId } = useParams();
  console.log(partyId);

  return (
    <PageContainer>
      <PageHeader title="조용한 사슴의 넷플릭스">
        <IconButton sx={{ background: 'transparent' }}>
          <ContactSupportIcon />
        </IconButton>
      </PageHeader>
      <PageContents />
    </PageContainer>
  );
};

export default ChatRoomPage;
