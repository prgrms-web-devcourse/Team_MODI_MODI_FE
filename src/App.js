import Header from 'components/Common/Header';
import { useOttInfoDispatch } from 'contexts/OttInfoProvider';
import { useOttInfoState } from 'contexts/OttInfoProvider';
import useAsync from 'hooks/useAsync';
import { Outlet } from 'react-router';
import { getOttList } from 'utils/api';
import { useEffect } from 'react';
import useStorage from 'hooks/useStorage';

const OTT_INFO_KEY = 'ottInfo';

function App() {
  const { ottServices } = useOttInfoState();
  const { onUpdate } = useOttInfoDispatch();
  const [storedOttInfo, setOttInfo] = useStorage(OTT_INFO_KEY, null, 'session');

  const [getOttListApiState, fetchOttListApiState] = useAsync(
    getOttList,
    [],
    [],
    true,
  );
  const {
    isLoading: ottListLoading,
    value: ottListValue,
    error: ottListError,
  } = getOttListApiState;

  useEffect(() => {
    if (storedOttInfo === null) {
      fetchOttListApiState();
    } else {
      onUpdate(storedOttInfo);
    }
  }, [storedOttInfo, fetchOttListApiState, onUpdate]);

  useEffect(() => {
    if (ottListValue) {
      setOttInfo(ottListValue);
      onUpdate(ottListValue);
    }
  }, [setOttInfo, ottListValue, onUpdate]);

  return (
    <>
      <Header user={false} />
      {ottListLoading && <h1>로딩중</h1>}
      {ottListError && <h1>에러</h1>}
      {ottServices.length !== 0 && <Outlet />}
    </>
  );
}

export default App;
