import { CssBaseline } from '@mui/material';
import CreatePartyPage from './pages/CreatePartyPage';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <>
      <CssBaseline />
      <PageContainer>
        <CreatePartyPage />
      </PageContainer>
    </>
  );
}

export default App;
