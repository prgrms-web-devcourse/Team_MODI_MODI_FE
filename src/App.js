import Header from 'components/Header/Header';
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
