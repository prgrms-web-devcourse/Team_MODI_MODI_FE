import { useEffect } from 'react';
import useStorage from 'hooks/useStorage';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OauthRedirectPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const jwtToken = searchParams.get('token');

  const [storedValue, setValue] = useStorage('TOKEN', '', 'session');

  useEffect(() => {
    setValue(() => {
      sessionStorage.removeItem('TOKEN');

      return jwtToken;
    });
    navigate('/');
  }, [storedValue, setValue, navigate, jwtToken]);

  return (
    <>
      <div>리다이렉트 페이지입니다.</div>
    </>
  );
};

export default OauthRedirectPage;
