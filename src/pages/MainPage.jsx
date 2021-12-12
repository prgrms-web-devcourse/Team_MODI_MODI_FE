import { Box, Container, Typography } from '@mui/material';
import useAsync from 'hooks/useAsync';
import OttList from 'components/Ott/OttList';
import MainCarousel from 'components/Main/MainCarousel';
import MainVisual from 'components/Main/MainVisual';
import { getOttList, getOttWaitings } from 'utils/api/index';
import { useNavigate } from 'react-router-dom';

const ottInfoEn = {
  넷플릭스: {
    ottNameEn: 'netflix',
  },
  왓챠: {
    ottNameEn: 'watcha',
  },
  '디즈니 플러스': {
    ottNameEn: 'disneyPlus',
  },
  웨이브: {
    ottNameEn: 'wavve',
  },
  티빙: {
    ottNameEn: 'tving',
  },
  라프텔: {
    ottNameEn: 'laftel',
  },
  '쿠팡 플레이': {
    ottNameEn: 'coupangPlay',
  },
  '아마존 프라임': {
    ottNameEn: 'amazonPrime',
  },
};

const MainPage = () => {
  const [ottList] = useAsync(getOttList());
  const [waitings] = useAsync(getOttWaitings());
  const navigate = useNavigate();

  const handleClickOtt = (ottId, ottName) => {
    navigate(`recruit/${ottInfoEn[ottName].ottNameEn}`);
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
          {ottList.value ? (
            <OttList
              ottServices={ottList.value.ottServices}
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
