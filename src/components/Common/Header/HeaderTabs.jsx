import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Tabs } from '@mui/material';
import theme from 'styles/theme.js';
import HeaderTab from './HeaderTab.jsx';

const HeaderTabs = ({ curPage }) => {
  const navigate = useNavigate();

  return (
    <Tabs
      value={0}
      indicatorColor="transparent"
      aria-label="nav tabs"
      sx={{
        minHeight: 56,
        minWidth: 70,
        lineHeight: 1,
        padding: 0,
        color: `${curPage === 'main' ? '#fff' : theme.palette.text.secondary}`,
      }}
    >
      <HeaderTab label="파티찾기" curPage={curPage} />
      <HeaderTab
        label="파티만들기"
        curPage={curPage}
        onClick={() => navigate('/create')}
      />
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
