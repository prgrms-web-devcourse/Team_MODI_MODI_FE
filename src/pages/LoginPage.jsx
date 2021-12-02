import { Container, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useCallback } from 'react';
import SocialLoginButton from '../components/SocialLoginButton';

const LoginPage = () => {
  const handleClickLoginButton = useCallback(() => {
    console.log(1);
  }, []);

  return (
    <Container maxWidth="xs" disableGutters>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '0 30px',
          }}
        >
          <Box>
            <Typography
              variant="h4"
              mt={10}
              mb={6}
              color="#bbcc4b"
              fontWeight={600}
            >
              MODI
            </Typography>
            <LoginDescription>재밌는 컨텐츠</LoginDescription>
            <LoginDescription>모두와 함께 즐겨요</LoginDescription>
            <LoginDescription>모두의 아이디</LoginDescription>
          </Box>
          <Typography variant="subtitle2" textAlign="center">
            3개의 넷플릭스 파티가 여러분을 기다리고 있습니다.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '224px',
            backgroundColor: '#BBCC4B',
            borderRadius: ' 32px 32px 0 0',
          }}
        >
          <SocialLoginButton
            onClick={handleClickLoginButton}
            provider="naver"
          />
          <SocialLoginButton
            onClick={handleClickLoginButton}
            provider="kakao"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;

const LoginDescription = styled(Typography)`
  font-size: 1.75rem;
  font-weight: 500;
`;
