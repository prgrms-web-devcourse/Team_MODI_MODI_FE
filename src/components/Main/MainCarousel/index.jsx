import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import CardSlide from './CardSlide';
import { styled } from '@mui/system';

const MainCarousel = ({ waitingOtts, slideGap }) => {
  const slideRef = useRef(null);
  const totalSlide = waitingOtts.length - 1;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(calc(-${
      activeSlide * 100
    }% - ${activeSlide * slideGap}px))`;
  }, [activeSlide, slideGap]);

  const handleNextSlide = e => {
    setActiveSlide(prevSlide => (prevSlide === totalSlide ? 0 : prevSlide + 1));
  };

  const handlePrevSlide = e => {
    setActiveSlide(prevSlide => (prevSlide === 0 ? totalSlide : prevSlide - 1));
  };

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
              watingCount={waitingForMatch}
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
