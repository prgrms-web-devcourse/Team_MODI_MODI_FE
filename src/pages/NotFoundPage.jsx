import { useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { Box, Button, Typography, Container } from '@mui/material';
import lottie from 'lottie-web';
import notFoundLottie from 'assets/not-found.json';

const NotFoundPage = () => {
  const lottieIcon = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieIcon.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: notFoundLottie,
    });
  }, []);

  const handleNavigateHome = useCallback(() => {
    navigate('/');
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
          페이지를 찾을 수 없습니다.
        </Typography>
        <Button variant="outlined" sx={{ mt: 2 }} onClick={handleNavigateHome}>
          홈으로 이동
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
