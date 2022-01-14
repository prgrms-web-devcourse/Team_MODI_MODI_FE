import PageContainer from 'components/Common/PageContainer';
import PageContents from 'components/Common/PageContents';
import PageHeader from 'components/Common/PageHeader';

const ChatPage = () => {
  return (
    <PageContainer>
      <PageHeader title="메세지" />
      <PageContents>채팅방 리스트</PageContents>
    </PageContainer>
  );
};

export default ChatPage;
