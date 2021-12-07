import { CssBaseline } from '@mui/material';
import CreatePartyPage from './pages/CreatePartyPage';
import PageHeader from './components/PageHeader';
import netflix from 'assets/netflix.png';
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
