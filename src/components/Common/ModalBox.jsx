import { Box, styled } from '@mui/system';

const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  width: '90%',
  maxWidth: '520px',
  maxHeight: '90%',
  borderRadius: '24px',
  backgroundColor: theme.palette.background.pageContent,
  transform: 'translate(-50%, -50%)',
  outline: 'none',
}));

export default ModalBox;
