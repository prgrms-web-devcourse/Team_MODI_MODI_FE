import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs } from '@mui/material';
import theme from 'styles/theme.js';
import HeaderTab from './HeaderTab.jsx';
import HeaderModal from './HeaderModal.jsx';

const HeaderTabs = ({ curPage }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Tabs
      value={0}
      indicatorColor={curPage === 'main' ? 'inherit' : 'secondary'}
      aria-label="nav tabs"
      sx={{
        minHeight: 56,
        minWidth: 70,
        lineHeight: 1,
        padding: 0,
        color: `${curPage === 'main' ? '#fff' : theme.palette.text.secondary}`,
      }}
    >
      <HeaderModal open={open} onClose={handleClose} />
      <HeaderTab label="파티찾기" curPage={curPage} onClick={handleOpen} />
      <HeaderTab label="파티만들기" curPage={curPage} />
    </Tabs>
  );
};

HeaderTabs.defaultProps = {
  curPage: 'main',
};

HeaderTabs.propTypes = {
  curPage: PropTypes.string,
};

export default HeaderTabs;
