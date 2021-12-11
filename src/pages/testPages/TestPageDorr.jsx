import { CssBaseline } from '@mui/material';
import useAsync from 'hooks/useAsync';
import { getRecruitingParties } from 'utils/api';

const TestPageDorr = () => {
  const [state, callback] = useAsync(
    getRecruitingParties(1, {
      size: 2,
      lastPartyId: 6,
    }),
  );

  const { isLoading, value, error } = state;
  console.log(value);
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
    </>
  );
};

export default TestPageDorr;
