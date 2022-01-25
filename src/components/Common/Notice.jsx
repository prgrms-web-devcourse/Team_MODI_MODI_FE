import PropTypes from 'prop-types';

import { NotificationsActive } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Notice = ({ badgeContent, isMainPage }) => {
  return (
    <Badge
      badgeContent={badgeContent}
      color="error"
      sx={{
        height: '15px',
      }}
    >
      <NotificationsActive color={isMainPage ? '#e0e0e0' : 'modiGray'} />
    </Badge>
  );
};

Notice.propTypes = {
  badgeContent: PropTypes.number,
  isMainPage: PropTypes.bool,
};

export default Notice;
