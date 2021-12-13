import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

const CardFlip = ({ fliped, onFlipCard, front, back }) => {
  const [isInitial, setIsInitial] = useState(true);

  const handleClick = useCallback(() => {
    onFlipCard && onFlipCard();
    setIsInitial(false);
  }, [onFlipCard]);

  return (
    <>
      <>
        <CardContainer
          fliped={!fliped}
          isInitial={isInitial}
          onClick={handleClick}
        >
          {back}
        </CardContainer>
        <CardContainer
          fliped={fliped}
          isInitial={isInitial}
          onClick={handleClick}
        >
          {front}
        </CardContainer>
      </>
    </>
  );
};

const CardContainer = styled('div', {
  shouldForwardProp: prop => prop !== 'fliped' && prop !== 'isInitial',
})`
  position: absolute;
  backface-visibility: hidden;
  margin: 0 auto;
  animation: ${({ fliped, isInitial }) => {
    if (isInitial) {
      return '';
    }

    return !fliped
      ? 'flip-scale-down .8s linear both'
      : 'flip-scale-up .8s linear both';
  }};
  }
    
  transform-style: preserve-3d;

  @keyframes flip-scale-up {
    0% {
      transform: scale(1) rotateY(0deg);
    }
    50% {
      transform: scale(0.8) rotateY(90deg);
    }
    100% {
      transform: scale(1) rotateY(180deg);
    }
  }

  @keyframes flip-scale-down {
    0% {
      transform: scale(1) rotateY(180deg);
    }
    50% {
      transform: scale(0.8) rotateY(270deg);
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
