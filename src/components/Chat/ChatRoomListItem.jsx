import {
  Badge,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import OttLogo from 'components/Ott/OttLogo';
import PropTypes from 'prop-types';

const ChatRoomListItem = ({
  ottName,
  partyLeaderName,
  latestMessageText,
  countNotReadMessage,
}) => {
  const textOverflowEllipsisSx = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };

  return (
    <>
      <ListItem disableGutters disablePadding divider>
        <ListItemButton
          sx={{
            width: '100%',
            background: 'transparent',
            pt: 2,
            pb: 2,
          }}
        >
          <ListItemAvatar>
            <OttLogo ottName={ottName} size={45} />
          </ListItemAvatar>
          <ListItemText
            disableTypography
            sx={{
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '80%',
                }}
              >
                <Typography
                  variant="smallB"
                  component="div"
                  mb={0.5}
                  sx={textOverflowEllipsisSx}
                >
                  {`${partyLeaderName}의 ${ottName}`}
                </Typography>
                <Typography
                  variant="micro"
                  component="div"
                  sx={textOverflowEllipsisSx}
                >
                  {latestMessageText}
                </Typography>
              </Box>
              <Badge
                badgeContent={countNotReadMessage}
                color="primary"
                sx={{
                  mr: 2,
                }}
              />
            </Box>
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
};

ChatRoomListItem.propTypes = {
  ottName: PropTypes.oneOf([
    '넷플릭스',
    '왓챠',
    '웨이브',
    '티빙',
    '디즈니 플러스',
    '라프텔',
    '쿠팡 플레이',
    '아마존 프라임',
    '',
  ]),
  partyLeaderName: PropTypes.string,
  latestMessageText: PropTypes.string,
  countNotReadMessage: PropTypes.number,
};

export default ChatRoomListItem;