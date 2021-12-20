import { useEffect, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import CardSlide from './CardSlide';
import { styled } from '@mui/system';

const MainCarousel = ({ waitingOtts, slideGap }) => {
  const slideRef = useRef(null);
  const totalSlide = waitingOtts.length - 1;
  const [activeSlide, setActiveSlide] = useState(0);
  const [mouseStartX, setMouseStartX] = useState(null);
  const [drag, setDrag] = useState(false);

  const moveCarousel = useCallback(() => {
    slideRef.current.style.transitionDuration = '0s';
    slideRef.current.style.transform = `translateX(calc(-${
      activeSlide * 100
    }% - ${activeSlide * slideGap}px))`;
  }, [activeSlide, slideGap]);

  const handleMouseMove = useCallback(
    e => {
      if (drag) {
        slideRef.current.style.transform = `translateX(calc(-${
          activeSlide * 100
        }% - ${activeSlide * slideGap + mouseStartX - e.pageX}px))`;
      }
    },
    [activeSlide, slideGap, mouseStartX, drag],
  );

  const handleNextSlide = useCallback(() => {
    setActiveSlide(prevSlide => {
      return prevSlide >= totalSlide ? 0 : prevSlide + 1;
    });
  }, [totalSlide]);

  const handlePrevSlide = useCallback(() => {
    setActiveSlide(prevSlide => {
      return prevSlide <= 0 ? totalSlide : prevSlide - 1;
    });
  }, [totalSlide]);

  const handleDragStart = useCallback(e => {
    e.preventDefault();
    setMouseStartX(e.clientX);
    setDrag(true);
  }, []);

  const handleDragEnd = useCallback(
    e => {
      e.preventDefault();
      setDrag(false);
      if (mouseStartX === null) {
        return;
      }
      if (mouseStartX - e.pageX < -150) {
        setActiveSlide(prevSlide => {
          return prevSlide === 0 ? totalSlide : prevSlide - 1;
        });
      } else if (mouseStartX - e.pageX > 150) {
        setActiveSlide(prevSlide => {
          return prevSlide === totalSlide ? 0 : prevSlide + 1;
        });
      } else {
        moveCarousel();
      }
      setMouseStartX(null);
    },
    [mouseStartX, totalSlide, moveCarousel],
  );

  useEffect(() => {
    moveCarousel();
  }, [moveCarousel]);

  useEffect(() => {
    const refValue = slideRef.current;
    refValue.addEventListener('mousedown', handleDragStart);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      refValue.removeEventListener('mousedown', handleDragStart);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleDragStart, handleDragEnd, handleMouseMove]);

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          p: '0 30px',
          mb: 3,
          overflow: 'hidden',
        }}
      >
        <Box
          ref={slideRef}
          sx={{
            position: 'relative',
            left: 0,
            width: '100%',
            display: 'flex',
            gap: `${slideGap}px`,
            pb: 1,
          }}
        >
          {waitingOtts.map(({ ottId, ottName, waitingForMatch }) => (
            <CardSlide
              key={ottId}
              ottId={ottId}
              ottName={ottName}
              waitingCount={waitingForMatch}
            />
          ))}
        </Box>
      </Box>
      <SlideControlButton
        aria-label="prevSlide"
        size="large"
        color="secondary"
        onClick={handlePrevSlide}
        sx={{ left: 0 }}
      >
        <ArrowBackIosNew />
      </SlideControlButton>
      <SlideControlButton
        aria-label="nextSlide"
        size="large"
        onClick={handleNextSlide}
        color="secondary"
        sx={{ right: 0 }}
      >
        <ArrowForwardIos />
      </SlideControlButton>
    </Box>
  );
};

MainCarousel.propTypes = {
  waitingOtts: PropTypes.array,
  slideGap: PropTypes.number,
};

const SlideControlButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  svg {
    width: 30px;
    height: 30px;
    fill: rgba(0, 0, 0, 0.25);
  }
`;

export default MainCarousel;
