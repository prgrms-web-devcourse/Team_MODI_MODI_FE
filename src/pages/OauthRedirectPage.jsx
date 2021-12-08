import { useSearchParams } from 'react-router-dom';

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();

  const jwtToken = searchParams.get('token');

  return (
    <>
      <div>리다이렉트 페이지입니다.</div>
      <div>{`jwtToken: ${jwtToken}`}</div>
    </>
  );
};

export default OauthRedirectPage;
