import { styled } from '@mui/system';
import { Container } from '@mui/material';

const PageContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  padding: 0,
  paddingTop: 72,
  [theme.breakpoints.down('md')]: {
    padding: 0,
    paddingTop: 110,
  },
}));

export default PageContainer;
