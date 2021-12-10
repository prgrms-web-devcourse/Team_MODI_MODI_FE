import PropTypes from 'prop-types';
import { Box, styled } from '@mui/system';

const CardFlip = ({ fliped, onFlipCard, front, back }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        perspective: '2000px',
      }}
    >
      <CardContainer fliped={!!fliped} onClick={onFlipCard}>
        {front}
      </CardContainer>
      <CardContainer fliped={!fliped} onClick={onFlipCard}>
        {back}
      </CardContainer>
    </Box>
  );
};

const CardContainer = styled('div')`
  position: absolute;
  backface-visibility: hidden;
  top: 0;
  left: 0;
  animation: ${({ fliped }) => {
    return fliped
      ? 'flip-scale-up 1s linear both'
      : 'flip-scale-down 1s linear both';
  }};
  transform-style: preserve-3d;

  @keyframes flip-scale-up {
    0% {
      transform: scale(1) rotateY(0);
    }
    30% {
      transform: scale(1.2) rotateY(0);
    }
    70% {
      transform: scale(1.2) rotateY(180deg);
    }
    100% {
      transform: scale(1) rotateY(180deg);
    }
  }

  @keyframes flip-scale-down {
    0% {
      transform: scale(1) rotateY(180deg);
    }
    30% {
      transform: scale(1.2) rotateY(180deg);
    }
    70% {
      transform: scale(1.2) rotateY(360deg);
    }
    100% {
      transform: scale(1) rotateY(360deg);
    }
  }
`;

CardFlip.propTypes = {
  fliped: PropTypes.bool,
  onFlipCard: PropTypes.func,
  front: PropTypes.element,
  back: PropTypes.element,
};
export default CardFlip;
