import PropTypes from 'prop-types';
import { Modal, Box, Typography, Container, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import theme from 'styles/theme.js';
import OttList from 'components/Ott/OttList';
import { useOttInfoState } from 'contexts/OttInfoProvider';
import { useNavigate } from 'react-router';

const HeaderModal = ({ open, onClose }) => {
  const { ottServices } = useOttInfoState();
  const navigate = useNavigate();

  const handleClickOtt = ottId => {
    navigate(`/recruit/${ottId}`);
    onClose && onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styleModalBox}>
        <Container sx={styleModalTitle}>
          <Typography variant="mediumB">어떤 서비스를 이용하시나요?</Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ color: theme.palette.text.secondary }}
          >
            <CloseIcon />
          </IconButton>
        </Container>
        <OttList
          ottServices={ottServices}
          onSelectOtt={handleClickOtt}
          toggleable={false}
        />
      </Box>
    </Modal>
  );
};

const styleModalBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '90%',
  height: 340,
  maxWidth: 350,
  bgcolor: 'background.paper',
  borderRadius: 6,
  boxShadow: 24,
  p: 2,
};

const styleModalTitle = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  pl: 1,
  pr: 0,
  mb: 1,
};

HeaderModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default HeaderModal;
