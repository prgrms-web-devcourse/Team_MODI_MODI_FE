import { Link } from 'react-router-dom';
import { Box, ListItem, Typography } from '@mui/material';
import { OttLogo } from 'components/Ott';
import PropTypes from 'prop-types';

const NoticeItem = ({ notice }) => {
  const { partyId, partyLeader, ottName, time, message } = notice;

  return (
    <ListItem
      sx={{
        borderBottom: '1px solid #eee',
        alignItems: 'flex-start',
        padding: '12px 0',
      }}
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
        to={`/${partyId}`}
        component={Link}
        sx={{
          display: 'block',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <Typography variant="smallB" component="span">
          {partyLeader}의 {ottName}
        </Typography>
        <Typography
          variant="small"
          component="span"
          sx={{
            color: 'modiGray.main',
            ml: 1,
          }}
        >
          {time}
        </Typography>
        <Typography variant="base" component="p">
          {message}
        </Typography>
      </Box>
    </ListItem>
  );
};

export default NoticeItem;

NoticeItem.propTypes = {
  notice: PropTypes.object,
};
