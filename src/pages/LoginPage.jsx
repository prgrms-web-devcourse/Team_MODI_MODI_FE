import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useCallback } from 'react';
import SocialLoginButton from 'components/SocialLoginButton';

const LoginPage = () => {
  const handleClickLoginButton = useCallback(() => {
    console.log(1);
  }, []);

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        height: '100vh',
        background:
          'radial-gradient(53.14% 58.21% at 8.64% 19.43%, #C2D15D 0%, #9EC238 100%)',
      }}
      disableGutters
    >
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          m: ' 0 30px',
        }}
      >
        <>
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
        </>
        <Typography
          variant="subtitle2"
          textAlign="center"
          color="common.white"
          mb={3.5}
        >
          3개의 넷플릭스 파티가 여러분을 기다리고 있습니다.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'modiGray.semilight',
          boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.25)',
          height: '224px',
          borderRadius: ' 32px 32px 0 0',
        }}
      >
        <SocialLoginButton onClick={handleClickLoginButton} provider="naver" />
        <SocialLoginButton onClick={handleClickLoginButton} provider="kakao" />
      </Box>
      <StyleCircularDiv />
    </Container>
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
