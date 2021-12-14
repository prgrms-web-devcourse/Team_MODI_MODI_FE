import Header from 'components/Common/Header';
import { useOttInfoDispatch } from 'contexts/OttInfoProvider';
import { useOttInfoState } from 'contexts/OttInfoProvider';
import useAsync from 'hooks/useAsync';
import { Outlet } from 'react-router';
import { getOttList } from 'utils/api';
import { useEffect } from 'react';

function App() {
  const { ottServices } = useOttInfoState();
  const { onUpdate } = useOttInfoDispatch();

  const [getOttListApiState] = useAsync(getOttList);
  const { isLoading, value, error } = getOttListApiState;

  useEffect(() => {
    if (ottServices.length === 0 && !!value) {
      onUpdate(value);
    }
  }, [onUpdate, ottServices.length, value]);

  return (
    <>
      <Header user={false} />
      {isLoading && <h1>로딩중</h1>}
      {error && <h1>에러</h1>}
      {ottServices.length !== 0 && <Outlet />}
    </>
  );
}

export default App;
