import { API_END_POINT } from 'constants/environment';

export const eventSource = (userId, setCount) => {
  const source = new EventSource(
    `${API_END_POINT}notifications/subscribe/${userId}`,
  );
  console.log('연결', source);

  source.addEventListener('sse', e => setCount());

  setInterval(() => {
    console.log(source.readyState);
  }, 1000);

  return source.readyState;
};
