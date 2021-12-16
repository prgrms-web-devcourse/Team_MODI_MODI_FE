import { Box, Container, Typography } from '@mui/material';
import useAsync from 'hooks/useAsync';
import OttList from 'components/Ott/OttList';
import MainCarousel from 'components/Main/MainCarousel';
import MainVisual from 'components/Main/MainVisual';
import { getOttWaitings } from 'utils/api/index';
import { useNavigate } from 'react-router-dom';
import { useOttInfoState } from 'contexts/OttInfoProvider';

const MainPage = () => {
  const [waitings] = useAsync(getOttWaitings);
  const { ottServices } = useOttInfoState();
  const navigate = useNavigate();
  const handleClickOtt = ottId => {
    navigate(`recruit/${ottId}`);
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
        {waitings.value ? (
          <MainCarousel
            waitingOtts={waitings.value.waitingOtts}
            slideGap={20}
          />
        ) : null}
        <Box sx={{ padding: '0 30px' }}>
          <Typography variant="baseB" component="h2" sx={{ mb: 2 }}>
            전체 서비스 보기
          </Typography>
          {ottServices.length ? (
            <OttList
              ottServices={ottServices}
              onSelectOtt={handleClickOtt}
              toggleable={false}
            />
          ) : null}
        </Box>
      </Box>
    </Container>
  );
};

export default MainPage;
