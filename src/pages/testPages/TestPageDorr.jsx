import { CssBaseline } from '@mui/material';
<<<<<<< HEAD
import CardDesign from 'components/Common/CardDesign';
=======
import useAsync from 'hooks/useAsync';
import { getMyInfo } from 'utils/api';
>>>>>>> 4c0a7d51b19a5197958584fe6cc8c436d623b56f

const TestPageDorr = () => {
  const [state, callback] = useAsync(getMyInfo());
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
<<<<<<< HEAD
      <CardDesign />
=======
      <button onClick={() => callback()}>불러오기</button>
>>>>>>> 4c0a7d51b19a5197958584fe6cc8c436d623b56f
    </>
  );
};

export default TestPageDorr;
