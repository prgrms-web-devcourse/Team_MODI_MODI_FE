import PropTypes from 'prop-types';
import { Tab } from '@mui/material';

const HeaderTab = ({ label, isMainPage, onClick, tabSize }) => {
  return (
    <Tab
      label={label}
      sx={[
        {
          position: 'relative',
          minHeight: tabSize,
          minWidth: 70,
          lineHeight: 1,
          padding: 0,
          opacity: 1,
          background: 'transparent',
          fontSize: '1rem',
          p: '0 0.5em',
        },
        {
          '&:hover': isMainPage ? hoverMain : hoverDefault,
        },
      ]}
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
  tabSize: PropTypes.number,
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
