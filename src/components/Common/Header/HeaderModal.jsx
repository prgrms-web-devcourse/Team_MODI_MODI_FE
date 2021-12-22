import PropTypes from 'prop-types';
import { Modal, Box, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OttList from 'components/Ott/OttList';
import { useOttInfoState } from 'contexts/OttInfoProvider';
import { useNavigate } from 'react-router';
import { ModalBox } from 'components/Common';
import { useTheme } from '@emotion/react';

const HeaderModal = ({ open, onClose }) => {
  const theme = useTheme();
  const { ottServices } = useOttInfoState();
  const navigate = useNavigate();

  const handleClickOtt = ottId => {
    navigate(`/recruit/${ottId}`);
    onClose && onClose();
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalBox>
        <Box sx={styleModalTitle}>
          <Typography variant="mediumB">어떤 서비스를 이용하시나요?</Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              background: 'transparent',
              color: theme.palette.text.secondary,
              padding: 0,
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <OttList
          ottServices={ottServices}
          onSelectOtt={handleClickOtt}
          toggleable={false}
        />
      </ModalBox>
    </Modal>
  );
};

const styleModalTitle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 2,
};

HeaderModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default HeaderModal;
