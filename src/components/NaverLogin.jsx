import { NAVER_AUTH_URL } from '../constants/oauth';

const NaverLogin = () => {
  return (
    <button onClick={() => window.open(NAVER_AUTH_URL)}>네이버 로그인</button>
  );
};

export default NaverLogin;
