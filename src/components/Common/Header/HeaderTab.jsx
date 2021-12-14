import PropTypes from 'prop-types';
import { Tab } from '@mui/material';

const HeaderTab = ({ label, curPage, onClick }) => {
  return (
    <Tab
      label={label}
      onClick={onClick}
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
  onClick: () => {},
};

HeaderTab.propTypes = {
  label: PropTypes.string,
  curPage: PropTypes.string,
  onClick: PropTypes.func,
};

export default HeaderTab;
