import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CardSlide } from 'components/Common';
import OttItem from 'components/Ott/OttItem';
import { ottServices } from 'constants/dummyData';

const MainPage = () => {
  const handleClickOtt = (ottId, ottName) => {
    console.log(ottId, ottName);
  };

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
            <OttItem
              key={ottId}
              ottId={ottId}
              ottName={ottName}
              onSelectOtt={handleClickOtt}
              toggleable={false}
            />
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
