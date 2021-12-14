import { useEffect } from 'react';
import { Outlet } from 'react-router';
import Header from 'components/Common/Header';
import useAsync from 'hooks/useAsync';
import { getOttList } from 'utils/api';
import { useOttInfoDispatch, useOttInfoState } from 'contexts/OttInfoProvider';

function App() {
  const [ottInfoList] = useAsync(getOttList);
  const { ottServices } = useOttInfoState();
  const { onUpdate } = useOttInfoDispatch();

  useEffect(() => {
    if (ottInfoList.value && !ottServices.length) {
      onUpdate(ottInfoList.value);
    }
  }, [ottInfoList.value]);

  return (
    <>
      <Header user={false} />
      <Outlet />
    </>
  );
}

export default App;
