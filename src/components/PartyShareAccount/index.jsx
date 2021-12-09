import PropTypes from 'prop-types';
import CardFlip from './CardFlip';
import CardTemplate from './CardTemplate';

const PartyShareAccount = ({ fliped, onFlipCard, sharedInfo }) => {
  const front = <CardTemplate />;

  const back = <CardTemplate sharedInfo={sharedInfo} />;

  return (
    <CardFlip
      fliped={fliped}
      onFlipCard={onFlipCard}
      front={front}
      back={back}
    />
  );
};

PartyShareAccount.propTypes = {
  fliped: PropTypes.bool,
  onFlipCard: PropTypes.func,
  sharedInfo: PropTypes.shape({
    sharedId: PropTypes.string,
    sharedPassword: PropTypes.string,
  }),
};

export default PartyShareAccount;