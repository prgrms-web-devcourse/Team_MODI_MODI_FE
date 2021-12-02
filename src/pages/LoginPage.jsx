import { Container, Box, Typography } from '@mui/material';
import { useCallback } from 'react';
import NaverLogin from '../components/NaverLogin';

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
            margin: '0 30px',
          }}
        >
          <Typography
            variant="h4"
            mt={10}
            mb={6}
            color="#bbcc4b"
            fontWeight={600}
          >
            MODI
          </Typography>
          <Box>
            <Typography fontSize="2rem" fontWeight="600">
              재밌는 컨텐츠
            </Typography>
            <Typography fontSize="2rem" fontWeight="600">
              모두와 함께 즐겨요
            </Typography>
            <Typography fontSize="2rem" fontWeight="600">
              모두의 아이디
            </Typography>
          </Box>
        </Box>
        <Box mb={0}>
          <Typography variant="subtitle1">
            3개의 넷플릭스 파티가 여러분을 기다리고 있습니다.
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '11.5rem',
            backgroundColor: '#BBCC4B',
            borderRadius: ' 32px 32px 0 0',
          }}
        >
          <NaverLogin onClick={handleClickLoginButton}>
            네이버 로그인
          </NaverLogin>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
