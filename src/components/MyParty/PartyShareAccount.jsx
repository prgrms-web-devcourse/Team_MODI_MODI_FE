import PropTypes from 'prop-types';
import CardFlip from 'components/Common/CardFlip';
import CardTemplate from 'components/Common/CardTemplate';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const PartyShareAccount = ({
  fliped,
  sharedInfo,
  onFlipCard,
  onEditSharedInfo,
}) => {
  const sharedInfoEditButton = (
    <IconButton
      size="small"
      onClick={onEditSharedInfo}
      sx={{
        bgcolor: 'transparent',
        color: 'text.secondary',
      }}
    >
      <EditIcon sx={{ fontSize: '16px' }} />
    </IconButton>
  );

  const front = (
    <CardTemplate isFront={true} sharedInfoEditButton={sharedInfoEditButton} />
  );

  const back = (
    <CardTemplate
      sharedInfo={sharedInfo}
      sharedInfoEditButton={sharedInfoEditButton}
    />
  );

  return (
    <>
      <CardFlip
        fliped={fliped}
        onFlipCard={onFlipCard}
        front={front}
        back={back}
      />
    </>
  );
};

PartyShareAccount.propTypes = {
  fliped: PropTypes.bool,
  sharedInfo: PropTypes.shape({
    sharedId: PropTypes.string,
    sharedPassword: PropTypes.string,
  }),
  onFlipCard: PropTypes.func,
  onEditSharedInfo: PropTypes.func,
};

export default PartyShareAccount;
