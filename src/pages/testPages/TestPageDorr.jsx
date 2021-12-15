import { CssBaseline } from '@mui/material';
import useAsync from 'hooks/useAsync';
<<<<<<< HEAD
import { getMyInfo } from 'utils/api';

const TestPageDorr = () => {
  const [state, callback] = useAsync(getMyInfo());
=======
import { getOtt } from 'utils/api';

const TestPageDorr = () => {
  const [state, callback] = useAsync(getOtt, [1]);
>>>>>>> 2ec2f0247d0d1b8d0cf7f210f3feb2887ebff99a
  const { isLoading, value, error } = state;

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
      <button onClick={() => callback()}>불러오기</button>
<<<<<<< HEAD
=======
      <button onClick={() => callback(5)}>불러오기</button>
      <button onClick={() => callback(4)}>불러오기</button>
>>>>>>> 2ec2f0247d0d1b8d0cf7f210f3feb2887ebff99a
    </>
  );
};

export default TestPageDorr;
