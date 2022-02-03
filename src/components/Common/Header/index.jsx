import { Link, useLocation } from 'react-router-dom';
import { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar, Box, Container, IconButton } from '@mui/material';
import HeaderTabs from './HeaderTabs.jsx';
import HeaderFab from './HeaderFab.jsx';
import Logo from 'components/Common/Logo.jsx';
import { useAuthState } from 'contexts/authContext.jsx';
import { useCustomThemeDispatch } from 'contexts/CustomThemeProvider.jsx';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useTheme } from '@emotion/react';
import Notice from 'components/Common/Notice';
import { eventSource } from 'utils/eventStream';
import { getNotificationList, readNotification } from 'utils/api';
import useAsync from 'hooks/useAsync';
import NoticeList from './../Notification/NoticeList';
import PageTransformModal from './../PageTransformModal';

const Header = () => {
  const location = useLocation();
  const { isLoggedIn, userId } = useAuthState();
  const isMainPage = useMemo(() => location.pathname === '/', [location]);
  const isLoginPage = useMemo(() => location.pathname === '/login', [location]);
  const theme = useTheme();
  const mdDownMatches = useMediaQuery(theme.breakpoints.down('md'));
  const { onToggleTheme } = useCustomThemeDispatch();

  const [noticeState, fetchNoticeApiState] = useAsync(
    getNotificationList,
    [],
    [],
    true,
  );

  const [, fetchReadNotificationAPI] = useAsync(readNotification, [], [], true);

  const { isLoading, value } = noticeState;

  const [open, setOpen] = useState();
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    if (userId) {
      console.log(userId);
      eventSource(userId, fetchNoticeApiState);
    }
  }, [userId, fetchNoticeApiState]);

  const handleClick = event => {
    fetchNoticeApiState();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickNotification = noticeId => {
    console.log(noticeId);
    handleClose();
    fetchReadNotificationAPI(noticeId);
    // 파티 읽음 처리
  };

  useEffect(() => {
    value && setNotificationCount(value.unreadCount);
  }, [value]);

  return (
    !isLoginPage && (
      <AppBar
        sx={{
          backgroundColor: `${
            isMainPage ? 'transparent' : 'background.pageContent'
          }`,
          height: mdDownMatches ? 56 : 72,
          boxShadow: `${isMainPage ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.15)'}`,
          position: 'fixed',
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Logo
                color={isMainPage ? false : true}
                size={mdDownMatches ? 56 : 72}
              />
            </Link>
            <IconButton
              sx={{
                backgroundColor: 'transparent',
                color: theme.palette.mode === 'dark' ? '#FFEE94' : '#5D7167',
              }}
              onClick={() => onToggleTheme()}
            >
              {theme.palette.mode === 'dark' ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexFlow: 'row nowrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <HeaderTabs
              isMainPage={isMainPage}
              tabSize={mdDownMatches ? 56 : 72}
              mode={theme.palette.mode}
            />
            <IconButton onClick={handleClick}>
              <Notice badgeContent={notificationCount} />
            </IconButton>
            <HeaderFab user={isLoggedIn} isMainPage={isMainPage} />
          </Box>
          {open && (
            <PageTransformModal>
              {isLoading && <p>로딩중</p>}
              {value && (
                <NoticeList
                  onClickClose={handleClose}
                  onClickNotification={handleClickNotification}
                  notifications={value.notificationResponseList}
                />
              )}
            </PageTransformModal>
          )}
        </Container>
      </AppBar>
    )
  );
};

Header.defaultProps = {
  user: false,
};

Header.propTypes = {
  user: PropTypes.bool,
  curPage: PropTypes.string,
};

export default Header;
