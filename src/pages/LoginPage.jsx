import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PageContainer from 'components/PageContainer';
import PageContents from 'components/PageContents';
import SocialLoginButton from 'components/SocialLoginButton';
import Logo from 'components/Logo';

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
          display: 'flex',
          position: 'relative',
          flex: 1,
          flexDirection: 'column',
          overflow: 'hidden',
          padding: '100px 30px 0 30px',
        }}
      >
        <Logo size={120} color />
        <Box
          sx={{
            flex: 1,
            mt: 3,
          }}
        >
          <Typography variant="visual" component="h3" color="modiGray.white">
            세상 모든 OTT
            <br />
            모두의 아이디 모디
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="common.white"
          mb={3.5}
          sx={{
            wordBreak: 'keep-all',
          }}
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

const StyleCircularDiv = styled(Box)`
  position: absolute;
  right: -12px;
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
