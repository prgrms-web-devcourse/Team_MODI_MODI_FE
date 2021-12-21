import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web';
import paymentSuccess from 'assets/pay-success-lottie.json';
import paymentFail from 'assets/pay-fail-lottie.json';
import success from 'assets/success-lottie.json';
import fail from 'assets/fail-lottie.json';
import createSuccess from 'assets/create-party-success.json';
import catLoaderLottie from 'assets/cat-loader-lottie.json';
import { Box } from '@mui/material';

const lottieTypes = {
  success: {
    lottie: success,
    loop: false,
  },
  paymentSuccess: {
    lottie: paymentSuccess,
    loop: true,
  },
  paymentFail: {
    lottie: paymentFail,
    loop: true,
  },
  fail: {
    lottie: fail,
    loop: false,
  },
  createSuccess: {
    lottie: createSuccess,
    loop: true,
  },
  loadingCat: {
    lottie: catLoaderLottie,
    loop: true,
  },
};

const LottieIcon = ({ type }) => {
  const lottieIcon = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieIcon.current,
      render: 'svg',
      loop: lottieTypes[type].loop,
      autoplay: true,
      animationData: lottieTypes[type].lottie,
    });
  }, [type]);

  return (
    <Box
      sx={{
        height: 200,
        mt: '-30px',
      }}
      ref={lottieIcon}
    />
  );
};

LottieIcon.propTypes = {
  type: PropTypes.string,
};

export default LottieIcon;
