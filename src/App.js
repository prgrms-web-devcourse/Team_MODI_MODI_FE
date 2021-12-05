import Test from 'components/Test';
import { UserProvider } from 'contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <Test />
    </UserProvider>
  );
}

export default App;
