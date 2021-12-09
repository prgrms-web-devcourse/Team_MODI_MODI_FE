import { Box, Container, Typography, Avatar, Button } from '@mui/material';
import { styled } from '@mui/system';
import { ottServices } from '../constants/dummyData';
import netflix from 'assets/netflix.png';
import watcha from 'assets/watcha.png';
import wavve from 'assets/wavve.png';
import tving from 'assets/tving.png';
import disney from 'assets/disney.png';
import laftel from 'assets/laftel.png';
import coupangPlay from 'assets/coupang-play.png';
import primevideo from 'assets/primevideo.png';
import CardSlide from './../components/CardSlide';

const ottImage = {
  1: netflix,
  2: watcha,
  3: wavve,
  4: tving,
  5: disney,
  6: laftel,
  7: coupangPlay,
  8: primevideo,
};

const MainPage = () => {
  return (
    <Container disableGutters>
      <VisualBox>
        <Typography variant="visual" color="modiGray.white" component="p">
          세상 모든 OTT
          <br />
          모두의 아이디 모디
        </Typography>
        <Typography
          variant="small"
          color="modiGray.white"
          component="p"
          sx={{ opacity: 0.6 }}
        >
          안정적인 모디에서 구독료 부담없이
          <br />
          세상 모든 OTT 서비스를 즐겨보세요
        </Typography>
      </VisualBox>

      {/* slider */}
      <Box
        sx={{
          position: 'relative',
          top: '-100px',
        }}
      >
        <CardSlide watingCount={46} ottName="디즈니 플러스" />
      </Box>

      {/* 전체서비스 보기 */}
      <Box sx={{ padding: '30px' }}>
        <Typography variant="baseB" component="h2" sx={{ mb: 2 }}>
          전체 서비스 보기
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {ottServices.map(({ ottId, ottName }) => (
            <Button
              key={ottId}
              sx={{
                width: '25%',
                textAlign: 'center',
                mb: 2,
                display: 'block',
              }}
            >
              <Avatar
                alt={`${ottName}logo`}
                src={ottImage[ottId]}
                sx={{
                  width: 72,
                  height: 72,
                  m: 'auto',
                  mb: 1,
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
                }}
              />
              <Typography
                variant="smallB"
                component="p"
                color="text.primary"
                sx={{
                  wordBreak: 'keep-all',
                  height: '2em',
                }}
              >
                {ottName}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

const VisualBox = styled(Box)`
  overflow: hidden;
  position: relative;
  padding: 12vh 30px;
  height: 50vh;
  background-image: radial-gradient(
    53.14% 58.21% at 8.64% 19.43%,
    #c2d15d 0%,
    #9ec238 100%
  );

  ::before {
    content: '';
    display: block;
    position: absolute;
    right: -2%;
    top: 50%;
    transform: translateY(-50%);
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    background: #fff;
    opacity: 0.1;
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    right: 4%;
    top: 50%;
    transform: translateY(-45%);
    width: 50vw;
    height: 50vw;
    border-radius: 50%;
    border: 1px dashed #fff;
    opacity: 0.2;
  }
`;

export default MainPage;
