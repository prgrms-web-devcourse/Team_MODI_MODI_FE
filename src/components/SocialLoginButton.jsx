import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const LoginButton = styled(Button)`
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

const SocialLoginButton = ({ provider }) => {
  const loginUrl = `http://1de37912de915f.localhost.run/oauth2/authorization/${provider}?redirect_uri=http://localhost:3000/oauth/redirect `;

  return (
    <>
      <LoginButton href={loginUrl}>{`${provider} 아이디로 로그인`}</LoginButton>
    </>
  );
};

SocialLoginButton.propTypes = {
  provider: PropTypes.string,
};

export default SocialLoginButton;
