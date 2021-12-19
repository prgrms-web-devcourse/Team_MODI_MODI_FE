import { styled } from '@mui/system';
import { Box } from '@mui/material';

const PageContents = styled(Box)(({ theme }) => ({
  borderRadius: '1.5rem 1.5rem 0 0',
  boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.15)',
  flexGrow: 1,
  padding: '30px',
  backgroundColor: theme.palette.modiGray.white,
  [theme.breakpoints.down('md')]: {
    padding: '30px 15px',
  },
}));

export default PageContents;
