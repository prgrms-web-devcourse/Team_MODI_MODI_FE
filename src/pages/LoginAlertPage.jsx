import { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Box, Button, Typography, Container } from '@mui/material';
import lottie from 'lottie-web';
import loginAlertLottie from 'assets/login-alert-lottie.json';

const LoginAlertPage = () => {
  const lottieIcon = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieIcon.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: loginAlertLottie,
    });
  }, []);

  const handleNavigateHome = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '70px 0 70px',
        height: '100vh',
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Box
          ref={lottieIcon}
          sx={{
            height: '30vh',
            m: '0 auto',
          }}
        />
        <Typography variant="large" component="p">
          🔒 로그인이 필요한 서비스입니다 🔒
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
          onClick={handleNavigateHome}
        >
          로그인 페이지로 이동
        </Button>
      </Box>
    </Container>
  );
};

export default LoginAlertPage;
