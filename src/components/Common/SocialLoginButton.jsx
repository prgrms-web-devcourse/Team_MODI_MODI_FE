import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import naverLogoSrc from 'assets/naver-logo.png';
import kakaoLogoSrc from 'assets/kakao-logo.png';
import { LOGIN_URL, REDIRECT_URL } from 'constants/environment';

const providerLogo = {
  naver: naverLogoSrc,
  kakao: kakaoLogoSrc,
};

const SocialLoginButton = ({ provider }) => {
  return (
    <>
      <LoginButton
        href={`${LOGIN_URL}${provider}?redirect_uri=${REDIRECT_URL}`}
      >
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
