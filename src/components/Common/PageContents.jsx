import { styled } from '@mui/system';
import { Box } from '@mui/material';

const PageContents = styled(Box)(({ theme }) => ({
  borderRadius: '1.5rem 1.5rem 0 0',
  boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.15)',
  backgroundColor: theme.palette.background.pageContent,
  flexGrow: 1,
  padding: '24px',
  [theme.breakpoints.down('sm')]: {
    padding: '20px 15px',
  },
}));

export default PageContents;
