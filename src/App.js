import Header from 'components/Common/Header';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Header user={false} />
      <Outlet />
    </>
  );
}

export default App;
