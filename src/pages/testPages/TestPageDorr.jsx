import { CssBaseline } from '@mui/material';
import useAsync from 'hooks/useAsync';
import { getOtt } from 'utils/api';
import { useState } from 'react';
import Alert from 'components/Common/Alert';

const TestPageDorr = () => {
  const [state, callback] = useAsync(getOtt, [1], [], true);
  const { isLoading, value, error } = state;
  const [isOpen, setIsOpen] = useState(false);

  console.log(isLoading, value, error);

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (error) {
    return <div>에러</div>;
  }

  if (!value) {
    return <button onClick={() => callback()}>불러오기</button>;
  }

  return (
    <>
      <CssBaseline />
      <button onClick={() => callback(2, 5)}>불러오기</button>
      <button onClick={() => callback(5)}>불러오기</button>
      <button onClick={() => callback(4)}>불러오기</button>
      <button onClick={() => setIsOpen(true)}> 팝업열기 </button>
      <Alert isOpen={isOpen} type="success" onClose={() => setIsOpen(false)} />
    </>
  );
};

export default TestPageDorr;
