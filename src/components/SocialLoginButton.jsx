import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import naverLogoSrc from 'assets/naver-logo.png';
import kakaoLogoSrc from 'assets/kakao-logo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const providerLogo = {
  naver: naverLogoSrc,
  kakao: kakaoLogoSrc,
};

const SocialLoginButton = ({ provider }) => {
  const loginUrl = `http://1de37912de915f.localhost.run/oauth2/authorization/${provider}?redirect_uri=http://localhost:3000/oauth/redirect `;

  return (
    <>
      <LoginButton href={loginUrl}>
        <img
          alt={`${provider}-logo`}
          src={providerLogo[provider]}
          style={{
            margin: ' 0 32px',
            height: '32px',
          }}
        />
        {`${provider} 아이디로 로그인`}
        <ArrowForwardIcon sx={{ m: '0 16px 0 auto' }} />
      </LoginButton>
    </>
  );
};

SocialLoginButton.propTypes = {
  provider: PropTypes.string,
};

const LoginButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  background-color: white;
  color: black;
  height: 64px;
  width: 352px;
  margin: 0.5rem;
  border-radius: 32px;
  font-weight: 600;
  box-shadow: 0px 4px 7px 2px rgba(66, 66, 66, 0.15);

  &:hover {
    background-color: #dddddd;
  }
`;

export default SocialLoginButton;
