import Header from 'components/Common/Header';
import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <Header user={true} curPage="sdfa" />
      <Outlet />
    </>
  );
}

export default App;
