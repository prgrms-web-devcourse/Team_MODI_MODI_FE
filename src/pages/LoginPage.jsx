import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PageContainer from 'components/PageContainer';
import PageContents from 'components/PageContents';
import SocialLoginButton from 'components/SocialLoginButton';

const LoginPage = () => {
  return (
    <PageContainer
      sx={{
        background:
          'radial-gradient(53.14% 58.21% at 8.64% 19.43%, #C2D15D 0%, #9EC238 100%)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <Typography
          component="h1"
          sx={{
            mt: '100px',
            fontSize: '2.75rem',
            fontWeight: 700,
            color: 'common.white',
          }}
        >
          Mo;D
        </Typography>
        <Box
          sx={{
            flex: 1,
            mt: 1,
          }}
        >
          <LoginDescription>세상 모든 OTT</LoginDescription>
          <LoginDescription>모두의 아이디 모디</LoginDescription>
        </Box>
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="common.white"
          mb={3.5}
        >
          모디에서 세상의 모든 디지털 컨텐츠를 즐겨보세요!
        </Typography>
        <StyleCircularDiv />
      </Box>

      <PageContents
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 0,
          alignItems: 'center',
          bgcolor: 'modiGray.semilight',
        }}
      >
        <SocialLoginButton provider="naver" />
        <SocialLoginButton provider="kakao" />
      </PageContents>
    </PageContainer>
  );
};

export default LoginPage;

const LoginDescription = styled(Typography)`
  font-size: 1.625rem;
  font-weight: 600;
  color: white;
`;

const StyleCircularDiv = styled(Box)`
  position: absolute;
  left: 151px;
  top: 185px;
  width: 272px;
  height: 272px;
  background-color: white;
  opacity: 0.1;
  border-radius: 50%;

  &::after {
    display: block;
    content: '';
    position: absolute;
    right: 48px;
    top: 18px;
    width: 272px;
    height: 272px;
    border: 2px dashed white;
    border-radius: 50%;
  }
`;
