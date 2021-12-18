import PropTypes from 'prop-types';
import { Tab } from '@mui/material';

const HeaderTab = ({ label, isMainPage, onClick }) => {
  return (
    <Tab
      label={label}
      sx={[
        {
          position: 'relative',
          minHeight: 56,
          minWidth: 70,
          lineHeight: 1,
          padding: 0,
          opacity: 1,
          background: 'transparent',
          fontSize: 16,
          p: '0 8px',
        },
        {
          '&:hover': isMainPage ? hoverMain : hoverDefault,
        },
      ]}
      siz
      onClick={onClick}
    />
  );
};

HeaderTab.defaultProps = {
  label: '',
  isMainPage: false,
};

HeaderTab.propTypes = {
  label: PropTypes.string,
  isMainPage: PropTypes.bool,
  onClick: PropTypes.func,
};

const hoverMain = {
  fontWeight: 'bold',
};

const hoverDefault = {
  color: 'secondary.main',
  borderBottom: '2px solid',
  borderColor: 'secondary.main',
};

export default HeaderTab;
