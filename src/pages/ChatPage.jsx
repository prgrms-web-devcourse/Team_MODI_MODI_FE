import ChatRoomList from 'components/Chat/ChatRoomList';
import PageContainer from 'components/Common/PageContainer';
import PageContents from 'components/Common/PageContents';
import PageHeader from 'components/Common/PageHeader';

const ChatPage = () => {
  return (
    <PageContainer>
      <PageHeader title="메세지" />
      <PageContents>
        <ChatRoomList />
      </PageContents>
    </PageContainer>
  );
};

export default ChatPage;
