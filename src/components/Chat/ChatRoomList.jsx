import { List } from '@mui/material';

import ChatRoomListItem from './ChatRoomListItem';
const CHAT_ROOM_LIST_DUMMY = {
  chatListItemArray: [
    {
      partyId: 1,
      ottName: '넷플릭스',
      partyLeaderName: '조용한 사슴',
      latestMessageText:
        '오늘부터 공유계정의 비밀번호를 변경하였습니다. 확인부탁드립니다.',
      countNotReadMessage: 100,
    },
    {
      partyId: 2,
      ottName: '쿠팡 플레이',
      partyLeaderName: '살찐 고양이',
      latestMessageText:
        '비매너 행동을 하는 멤버가 있는 것 같은데 주의부탁드립니다. ',
      countNotReadMessage: 3,
    },
    {
      partyId: 3,
      ottName: '라프텔',
      partyLeaderName: '언짢은 강아지',
      latestMessageText:
        '오늘부터 같이 파티를 하게 되었네요! 잘 부탁드려요 ㅋㅋㅋ ',
      countNotReadMessage: 0,
    },
    {
      partyId: 4,
      ottName: '아마존 프라임',
      partyLeaderName: '조용한 사슴',
      latestMessageText: '아 자꾸 비매너 행동하시는데 계속 이러시면 신고합니다',
      countNotReadMessage: 122,
    },
    {
      partyId: 5,
      ottName: '웨이브',
      partyLeaderName: '좋은 카멜레온',
      latestMessageText: '혹시 지금 저만 계정 접속이 안되나요??',
      countNotReadMessage: 83,
    },
  ],
};

const ChatRoomList = () => {
  return (
    <List>
      {CHAT_ROOM_LIST_DUMMY.chatListItemArray.map(
        ({
          partyId,
          ottName,
          partyLeaderName,
          latestMessageText,
          countNotReadMessage,
        }) => (
          <ChatRoomListItem
            key={partyId}
            ottName={ottName}
            partyLeaderName={partyLeaderName}
            latestMessageText={latestMessageText}
            countNotReadMessage={countNotReadMessage}
          />
        ),
      )}
    </List>
  );
};

export default ChatRoomList;
