import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import naverLogoSrc from 'assets/naver-logo.png';
import kakaoLogoSrc from 'assets/kakao-logo.png';

const providerLogo = {
  naver: naverLogoSrc,
  kakao: kakaoLogoSrc,
};

const SocialLoginButton = ({ provider }) => {
  const loginUrl = `http://1de37912de915f.localhost.run/oauth2/authorization/${provider}?redirect_uri=http://localhost:3000/oauth/redirect `;

  return (
    <>
      <LoginButton href={loginUrl}>
        <ProviderLogo alt={`${provider}-logo`} src={providerLogo[provider]} />
        <Typography
          variant="smallB"
          sx={{
            wordBreak: 'keep-all',
            textAlign: 'center',
          }}
        >{`${provider} 아이디로 로그인`}</Typography>
        <ArrowForwardIcon sx={{ m: '0 16px' }} />
      </LoginButton>
    </>
  );
};

SocialLoginButton.propTypes = {
  provider: PropTypes.string,
};

const ProviderLogo = styled('img')`
  margin: 0 16px;
  height: 32px;
`;

const LoginButton = styled(Button)`
  display: flex;
  justify-content: space-around;
  background-color: white;
  width: 100%;
  color: black;
  height: 64px;
  margin: 0.5rem;
  border-radius: 32px;

  box-shadow: 0px 4px 7px 2px rgba(66, 66, 66, 0.15);

  &:hover {
    background-color: #dddddd;
  }
`;

export default SocialLoginButton;
