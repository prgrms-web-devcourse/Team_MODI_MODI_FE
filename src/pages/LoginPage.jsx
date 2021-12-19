import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import theme from 'styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography, Container } from '@mui/material';
import { SocialLoginButton, Logo } from 'components/Common';
import popcornLogoSrc from 'assets/popcorn-logo.svg';

const LoginPage = () => {
  const mdUpMatches = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container
      sx={{
        pt: mdUpMatches ? '17vh' : '10vh',
        overflow: 'hidden',
        position: 'relative',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          pb: 4,
          margin: '0 auto',
          maxWidth: '350px',
        }}
      >
        <Link to="/">
          <Logo size={120} />
        </Link>
        <Typography
          variant="visual"
          component="h1"
          color="text.primary"
          sx={{
            mt: 1,
          }}
        >
          세상 모든 OTT
          <br />
          모두의 아이디 모디
        </Typography>
        <Typography
          variant="base"
          color="text.secondary"
          component="p"
          sx={{
            mt: 2,
            wordBreak: 'keep-all',
          }}
        >
          모디에서 세상의 모든 디지털 컨텐츠를 즐겨보세요!
        </Typography>
      </Box>
      <Box>
        <SocialLoginButton provider="naver" />
        <SocialLoginButton provider="kakao" />
      </Box>
      <PopCornLogo src={popcornLogoSrc} />
    </Container>
  );
};

export default LoginPage;

const PopCornLogo = styled('img')`
  position: absolute;
  width: 80vw;
  max-width: 600px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: -1;
`;
