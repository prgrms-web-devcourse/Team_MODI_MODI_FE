import { getUser } from 'contexts/UserContext';
import { useUserDispatch } from 'contexts/UserContext';
import { useUserState } from 'contexts/UserContext';
import { useEffect, useCallback } from 'react';

const Test = () => {
  const state = useUserState();
  const dispatch = useUserDispatch();

  const { data: user, loading, error } = state.user;
  const fetchData = useCallback(() => {
    getUser(dispatch, 1);
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return <div>로딩중...</div>;
  }

  if (error) {
    return <div>에러발생</div>;
  }

  if (!user) {
    return <button onClick={fetchData}>불러오기</button>;
  }

  return (
    <>
      <h1>테스츠페이지</h1>
      <div>{user.userId}</div>
      <div>{user.username}</div>
      <div>{user.points}</div>
      <button onClick={fetchData}>불러오기</button>;
    </>
  );
};

export default Test;
