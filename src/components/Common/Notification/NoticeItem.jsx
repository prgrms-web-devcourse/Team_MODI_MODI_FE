import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Box, ListItem, Typography } from '@mui/material';
import { OttLogo } from 'components/Ott';
import { formattingCreatedAt } from 'utils/formatting';

const NoticeItem = ({ notice, onClickNotification }) => {
  const { id, partyId, partyLeaderName, ottName, createdAt, content } = notice;

  const handleClickNotification = () => {
    onClickNotification(id);
  };

  return (
    <ListItem
      sx={{
        borderBottom: '1px solid #eee',
        alignItems: 'flex-start',
        padding: '12px 0',
      }}
      onClick={handleClickNotification}
    >
      <OttLogo
        ottName={ottName}
        size={24}
        sx={{
          mt: '4px',
          mr: 1,
        }}
      />
      <Box
        to={`/myParty/${partyId}`}
        component={Link}
        sx={{
          display: 'block',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <Typography variant="smallB" component="span">
          {partyLeaderName}의 {ottName}
        </Typography>
        <Typography
          variant="small"
          component="span"
          sx={{
            color: 'modiGray.main',
            ml: 1,
          }}
        >
          {formattingCreatedAt(createdAt)}
        </Typography>
        <Typography variant="base" component="p">
          {content}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default NoticeItem;

NoticeItem.propTypes = {
  notice: PropTypes.object,
  onClickNotification: PropTypes.func,
};
