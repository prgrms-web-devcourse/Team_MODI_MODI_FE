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

  const moveCarousel = useCallback(
    duration => {
      slideRef.current.style.transitionDuration = `${duration}ms`;
      slideRef.current.style.transform = `translateX(calc(-${
        activeSlide * 100
      }% - ${activeSlide * slideGap}px))`;
    },
    [activeSlide, slideGap],
  );

  const handleMouseMove = useCallback(
    e => {
      if (drag) {
        slideRef.current.style.transform = `translateX(calc(-${
          activeSlide * 100
        }% - ${
          activeSlide * slideGap +
          mouseStartX -
          (e.clientX ?? e.changedTouches[0].clientX)
        }px))`;
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
    setMouseStartX(e.clientX ?? e.changedTouches[0].clientX);

    setDrag(true);
  }, []);

  const handleDragEnd = useCallback(
    e => {
      setDrag(false);
      if (mouseStartX === null) {
        return;
      }
      if (
        mouseStartX - (e.clientX ?? e.changedTouches[0].clientX) <
        -(e.target.offsetWidth / 2)
      ) {
        setActiveSlide(prevSlide => {
          return prevSlide === 0 ? totalSlide : prevSlide - 1;
        });
      } else if (
        mouseStartX - (e.clientX ?? e.changedTouches[0].clientX) >
        e.target.offsetWidth / 2
      ) {
        setActiveSlide(prevSlide => {
          return prevSlide === totalSlide ? 0 : prevSlide + 1;
        });
      } else {
        moveCarousel(300);
      }
      setMouseStartX(null);
    },
    [mouseStartX, totalSlide, moveCarousel],
  );

  useEffect(() => {
    moveCarousel(300);
  }, [moveCarousel]);

  useEffect(() => {
    const refValue = slideRef.current;
    refValue.addEventListener('mousedown', handleDragStart);
    refValue.addEventListener('touchstart', handleDragStart, {
      passive: true,
    });
    window.addEventListener('mouseup', handleDragEnd);
    refValue.addEventListener('touchend', handleDragEnd);
    window.addEventListener('mousemove', handleMouseMove);
    refValue.addEventListener('touchmove', handleMouseMove, {
      passive: true,
    });

    return () => {
      refValue.removeEventListener('mousedown', handleDragStart);
      refValue.removeEventListener('touchstart', handleDragStart, {
        passive: true,
      });
      window.removeEventListener('mouseup', handleDragEnd);
      refValue.removeEventListener('touchend', handleDragEnd);
      window.removeEventListener('mousemove', handleMouseMove);
      refValue.removeEventListener('touchmove', handleMouseMove);
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
