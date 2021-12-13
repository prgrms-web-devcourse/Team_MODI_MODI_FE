import PropTypes from 'prop-types';
import { Tab } from '@mui/material';

const HeaderTab = ({ label, curPage, onClick }) => {
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
        },
        {
          '&:hover': curPage === 'main' ? null : hoverDefault,
        },
      ]}
      onClick={onClick}
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
  onClick: PropTypes.func,
};

const hoverDefault = {
  color: 'secondary.main',
  borderBottom: '2px solid',
  borderColor: 'secondary.main',
};

export default HeaderTab;
