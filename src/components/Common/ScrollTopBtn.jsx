import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const ScrollTopBtn = () => {
  const [scrollY, setScrollY] = useState(0);
  const [topBtnStatus, setTopBtnStaatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    scrollY > 100 ? setTopBtnStaatus(true) : setTopBtnStaatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();

    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
    setTopBtnStaatus(false);
  };

  return (
    topBtnStatus && (
      <Button
        sx={{
          position: 'fixed',
          minWidth: '50px',
          bottom: 25,
          right: 24,
          bgcolor: 'GrayText',
          color: 'modiGray.light',
        }}
        onClick={handleScrollTop}
      >
        TOP
      </Button>
    )
  );
};

export default ScrollTopBtn;
