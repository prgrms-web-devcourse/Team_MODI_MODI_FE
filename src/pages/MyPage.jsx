import { Box, Button, Typography } from '@mui/material';
import { priceToString } from 'utils/priceToString';
import { PageContainer, PageContents } from 'components/Common';
import MyPartyTab from 'components/MyParty/MyPartyTab';
import { userInfo, parties } from 'constants/myPageDummyData';

const MyPage = () => {
  const { userId, username, points } = userInfo;

  const handleClickCharge = () => {
    console.log('충전');
    // 포인트 충전 페이지로 이동
  };

  return (
    <PageContainer
      sx={{
        bgcolor: 'secondary.main',
      }}
    >
      <Box>
        <Box
          sx={{
            p: 1,
            m: 1,
          }}
        >
          <Typography color="primary.contrastText" variant="mediumB">
            안녕하세요, {username}님
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 2,
            textAlign: 'center',
          }}
        >
          <Typography
            color="primary.contrastText"
            variant="microB"
            component="p"
          >
            나의 포인트
          </Typography>
          <Typography
            variant="visual"
            component="p"
            style={{
              color: '#F0E07E',
            }}
          >
            {priceToString(points)}
          </Typography>
          <Button
            variant="contained"
            sx={{
              m: 2,
            }}
            style={{
              backgroundColor: '#BBBBBB',
              minWidth: '40%',
              height: 40,
            }}
            onClick={handleClickCharge}
          >
            충전하기
          </Button>
        </Box>
      </Box>
      <PageContents
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'white',
        }}
      >
        <MyPartyTab parties={parties} />
      </PageContents>
    </PageContainer>
  );
};

export default MyPage;
