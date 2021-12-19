import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@mui/material';
import MyPartySummary from './MyPartySummary';
import lottie from 'lottie-web';
import noPartyLottie from 'assets/no-party-lottie.json';
import { useEffect, useRef } from 'react';

const statusState = {
  ONGOING: '진행중인',
  RECRUITING: '대기중인',
  FINISHED: '종료된',
};

const MyPartyList = ({
  status,
  parties,
  onClickParty,
  onClickMoreButton,
  buttonDisabled,
}) => {
  const lottieIcon = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieIcon.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: noPartyLottie,
    });
  }, []);
  const handleClickMoreButton = () => {
    onClickMoreButton(status);
  };

  return (
    <>
      {!parties.length && (
        <>
          <Box
            ref={lottieIcon}
            sx={{
              height: '30vh',
              m: '10 auto',
              mt: 5,
            }}
          />
          <Typography
            sx={{
              mt: 4,
            }}
            align="center"
            variant="mediumB"
            component="p"
            color="secondary"
          >
            {statusState[status]} 파티가 없습니다.
          </Typography>
        </>
      )}
      {parties && (
        <>
          <Box sx={{ mt: 2 }}>
            {parties.map(({ partyId, ...props }) => (
              <MyPartySummary
                key={partyId}
                partyId={partyId}
                {...props}
                onClickParty={onClickParty}
              />
            ))}
          </Box>
          <Box
            style={{
              textAlign: 'center',
            }}
          >
            {!buttonDisabled && (
              <Button
                variant="contained"
                size="small"
                color="modiGray"
                onClick={handleClickMoreButton}
              >
                더보기
              </Button>
            )}
          </Box>
        </>
      )}
    </>
  );
};

MyPartyList.propTypes = {
  status: PropTypes.string,
  parties: PropTypes.array,
  onClickParty: PropTypes.func,
  onClickMoreButton: PropTypes.func,
  buttonDisabled: PropTypes.bool,
};

export default MyPartyList;
