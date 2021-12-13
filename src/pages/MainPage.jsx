import { Box, Container, Typography } from '@mui/material';
import OttList from 'components/Ott/OttList';
import MainCarousel from 'components/Main/MainCarousel';
import MainVisual from 'components/Main/MainVisual';
import { ottServices, waitingOtts } from 'constants/dummyData';

const MainPage = () => {
  const handleClickOtt = (ottId, ottName) => {
    // TODO ott서비스 선택시 서비스 파티 목록 페이지로 이동
    console.log(ottId, ottName);
  };

  return (
    <Container disableGutters>
      <MainVisual />
      <Box
        sx={{
          mt: '-85px',
          position: 'relative',
        }}
      >
        <MainCarousel waitingOtts={waitingOtts} slideGap={20} />
        <Box sx={{ padding: '0 30px' }}>
          <Typography variant="baseB" component="h2" sx={{ mb: 2 }}>
            전체 서비스 보기
          </Typography>
          <OttList
            ottServices={ottServices}
            onSelectOtt={handleClickOtt}
            toggleable={false}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MainPage;
