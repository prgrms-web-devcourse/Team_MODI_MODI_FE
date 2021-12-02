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

  &:hover {
    background-color: #dddddd;
  }
`;

const SocialLoginButton = ({ provider }) => {
  const loginUrl = `http://aae05aa0de4963.localhost.run/login/oauth2/code/${provider}`;
  console.log(loginUrl);

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
