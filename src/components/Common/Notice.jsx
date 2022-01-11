import PropTypes from 'prop-types';

import { NotificationsActive } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Notice = ({ badgeContent }) => {
  return (
    <Badge badgeContent={badgeContent} color="error">
      <NotificationsActive />
    </Badge>
  );
};

Notice.propTypes = {
  badgeContent: PropTypes.number,
};

export default Notice;
