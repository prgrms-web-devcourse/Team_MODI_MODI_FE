import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { useCallback } from 'react';

const CardFlip = ({ flip, onFlip, front, back }) => {
  const handleFlipCard = useCallback(() => {
    onFlip && onFlip();
  }, [onFlip]);

  return (
    <Box
      sx={{
        position: 'relative',
        perspective: '1000px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          backfaceVisibility: 'hidden',
          top: 0,
          left: 0,
          transform: `rotateY(${flip ? 180 : 0}deg)`,
          transition: 'cubic-bezier(.85,.49,.66,1.23) 1.2s',
        }}
        onClick={handleFlipCard}
      >
        {front}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          backfaceVisibility: 'hidden',
          top: 0,
          left: 0,
          transform: `rotateY(${flip ? 0 : -180}deg)`,
          transition: 'cubic-bezier(.85,.49,.66,1.23) 1.2s',
        }}
        onClick={handleFlipCard}
      >
        {back}
      </Box>
    </Box>
  );
};

CardFlip.propTypes = {
  flip: PropTypes.bool,
  onFlip: PropTypes.func,
  front: PropTypes.element,
  back: PropTypes.element,
};
export default CardFlip;
