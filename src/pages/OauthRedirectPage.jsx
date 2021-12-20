import { useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthDispatch } from 'contexts/authContext';
import { TOKEN_KEY } from 'constants/keys';

const OauthRedirectPage = () => {
  const { onLogin } = useAuthDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const jwtToken = useMemo(() => searchParams.get(TOKEN_KEY), [searchParams]);

  useEffect(() => {
    sessionStorage.setItem(TOKEN_KEY, JSON.stringify(jwtToken));
    navigate('/');
    onLogin();
  }, [jwtToken, navigate, onLogin]);

  return (
    <>
      <div>스켈레톤~~~~~</div>
    </>
  );
};

export default OauthRedirectPage;
