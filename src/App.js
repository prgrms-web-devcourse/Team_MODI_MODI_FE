import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <div
        style={{
          height: '48px',
          border: '2px solid',
        }}
      >
        간이 헤더
      </div>
      <Outlet />
    </>
  );
}

export default App;
