import { useEffect } from 'react';
import useStorage from 'hooks/useStorage';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthDispatch } from 'contexts/authContext';
import { getMyInfo } from 'utils/api';
import useAsync from 'hooks/useAsync';

const OauthRedirectPage = () => {
  const { onUpdate, onLogin } = useAuthDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const jwtToken = searchParams.get('token');

  const [, setValue] = useStorage('TOKEN', jwtToken, 'session');

  const [getMyInfoAPIState, fetchGetMyInfoAPIState] = useAsync(
    getMyInfo,
    [],
    [],
    true,
  );

  const { isLoading, value, error } = getMyInfoAPIState;
  useEffect(() => {
    setValue(jwtToken);
  }, [setValue, jwtToken]);

  useEffect(() => {
    fetchGetMyInfoAPIState();
  }, [fetchGetMyInfoAPIState]);

  useEffect(() => {
    if (value) {
      onUpdate(value);
      onLogin();
      navigate('/');
    }
  }, [onLogin, onUpdate, value, navigate]);

  if (isLoading) {
    <h1>로그인중...</h1>;
  }

  if (error) {
    <h1>에러</h1>;
  }

  return (
    <>
      <div>리다이렉트 페이지입니다.</div>
    </>
  );
};

export default OauthRedirectPage;
