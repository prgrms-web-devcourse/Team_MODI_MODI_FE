import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const LoginButton = styled(Button)`
  background-color: white;
  color: black;
  height: 64px;
  width: 352px;
  border-radius: 32px;
  font-weight: 600;

  &:hover {
    background-color: #dddddd;
  }
`;

const SocialLoginButton = ({ provider }) => {
  const loginUrl = `https://245c8dccf5f7e9.localhost.run/oauth2/authorization/${provider}?redirect_uri='http://localhost:3000`;

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
