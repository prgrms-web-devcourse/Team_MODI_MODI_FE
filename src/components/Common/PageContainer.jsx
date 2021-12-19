import { styled } from '@mui/system';
import { Container } from '@mui/material';

const PageContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  padding: 0,
  [theme.breakpoints.down('md')]: {
    padding: 0,
  },
}));

export default PageContainer;
