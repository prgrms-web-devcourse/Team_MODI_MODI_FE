import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Tabs } from '@mui/material';
import theme from 'styles/theme.js';
import HeaderTab from './HeaderTab.jsx';
import HeaderModal from './HeaderModal.jsx';

const HeaderTabs = ({ isMainPage, tabSize, mode = 'light' }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  return (
    <Tabs
      value={0}
      TabIndicatorProps={{
        style: {
          display: 'none',
        },
      }}
      aria-label="nav tabs"
      sx={{
        minHeight: tabSize,
        minWidth: 70,
        lineHeight: 1,
        padding: 0,
        color: `${
          isMainPage || mode === 'dark' ? '#fff' : theme.palette.text.secondary
        }`,
      }}
    >
      <HeaderModal open={open} onClose={handleClose} />
      <HeaderTab
        label="파티찾기"
        isMainPage={isMainPage}
        onClick={handleOpen}
        tabSize={tabSize}
      />
      <HeaderTab
        label="파티만들기"
        isMainPage={isMainPage}
        onClick={() => navigate('/create')}
      />
      <HeaderTab
        label="포인트 충전"
        isMainPage={isMainPage}
        onClick={() => navigate('/charge')}
      />
    </Tabs>
  );
};

HeaderTabs.defaultProps = {
  isMainPage: false,
};

HeaderTabs.propTypes = {
  isMainPage: PropTypes.bool,
  tabSize: PropTypes.number,
  mode: PropTypes.oneOf(['light', 'dark']),
};

export default HeaderTabs;
