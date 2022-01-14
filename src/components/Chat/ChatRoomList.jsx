import { List } from '@mui/material';

import ChatRoomListItem from './ChatRoomListItem';

const ChatRoomList = () => {
  return (
    <List>
      <ChatRoomListItem
        ottName="넷플릭스"
        partyLeaderName="조용한 사슴"
        latestMessageText="비밀번호 바꿈 ㅅㄱ 님들 이제 이용불가임 zzzzzzzzzzz"
        countNotReadMessage={100}
      />
      <ChatRoomListItem
        ottName="쿠팡 플레이"
        partyLeaderName="살찐 고양이"
        latestMessageText="님들이랑 같이 못하겠음 탈주함 ㅂㅂ"
        countNotReadMessage={10}
      />
      <ChatRoomListItem
        ottName="라프텔"
        partyLeaderName="언짢은 강아지"
        latestMessageText="오늘부터 시작 맞나요??"
        countNotReadMessage={1}
      />
      <ChatRoomListItem
        ottName="아마존 프라임"
        partyLeaderName="좋은 호랑이"
        latestMessageText="내일까지 파티원 못 구하면 파티 폭파합니다."
        countNotReadMessage={56}
      />
    </List>
  );
};

export default ChatRoomList;
