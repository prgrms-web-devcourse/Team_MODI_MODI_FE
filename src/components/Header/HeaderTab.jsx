import PropTypes from 'prop-types';
import { Tab } from '@mui/material';

const HeaderTab = ({ label, curPage }) => {
  return (
    <Tab
      label={label}
      sx={{
        minHeight: 56,
        minWidth: 70,
        lineHeight: 1,
        padding: 0,
        opacity: 1,
      }}
    />
  );
};

HeaderTab.defaultProps = {
  label: '',
  curPage: 'main',
};

HeaderTab.propTypes = {
  label: PropTypes.string,
  curPage: PropTypes.string,
};

export default HeaderTab;
