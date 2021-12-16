import { useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import lottie from 'lottie-web';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import paymentSuccess from 'assets/pay-success-lottie.json';
import paymentFail from 'assets/pay-fail-lottie.json';
import success from 'assets/success-lottie.json';
import fail from 'assets/fail-lottie.json';

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
};

const Alert = ({ type, messege, helperText, onClose }) => {
  const lottieIcon = useRef();
  useEffect(() => {
    type &&
      lottie.loadAnimation({
        container: lottieIcon.current,
        render: 'svg',
        loop: lottieTypes[type].loop,
        autoplay: true,
        animationData: lottieTypes[type].lottie,
      });
  }, [type]);

  return (
    <AlertBox>
      <Box
        sx={{
          flexGrow: 1,
          mb: 2,
        }}
      >
        <AlertIcon ref={lottieIcon} />
        <Typography
          variant="large"
          component="p"
          color="text.primary"
          sx={{ mb: 0.5 }}
        >
          {messege}
        </Typography>
        <Typography variant="base" component="p" color="text.secondary">
          {helperText}
        </Typography>
      </Box>
      <Button
        type="button"
        variant="contained"
        size="small"
        sx={{
          fontSize: 16,
          borderRadius: 20,
          width: '40%',
          margin: '0 auto',
        }}
        onClick={onClose}
      >
        확인
      </Button>
    </AlertBox>
  );
};

const AlertIcon = styled(Box)`
  margin: 0 auto;
  height: 200px;
`;

const AlertBox = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 100%;
  max-width: 350px;
  min-height: 280px;
  max-height: 90%;
  overflow: auto;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
`;

Alert.propTypes = {
  type: PropTypes.string,
  messege: PropTypes.string,
  helperText: PropTypes.string,
  onClose: PropTypes.func,
};

export default Alert;
