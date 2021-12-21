import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import popcornLogoSrc from 'assets/popcorn-logo.svg';

const MainVisual = () => {
  return (
    <VisualBox>
      <Box
        sx={{
          position: 'relative',
          margin: '0 auto',
          maxWidth: 550,
          height: '100%',
        }}
      >
        <Typography variant="visual" color="modiGray.white" component="p">
          세상 모든 OTT
          <br />
          모두의 아이디 모디
        </Typography>
        <Typography
          variant="small"
          color="modiGray.white"
          component="p"
          sx={{
            opacity: 0.6,
            mt: '11px',
          }}
        >
          안정적인 모디에서 구독료 부담없이
          <br />
          세상 모든 OTT 서비스를 즐겨보세요
        </Typography>
        <SymbolImg src={popcornLogoSrc} alt="" />
      </Box>
    </VisualBox>
  );
};

const VisualBox = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  padding: '10vh 30px 0',
  height: '40vh',
  minHeight: '290px',
  backgroundColor: theme.palette.background.mainVisual,
}));

const SymbolImg = styled('img')`
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 22vh;
  min-width: 160px;
  img {
    display: block;
    object-fit: contain;
  }
`;

export default MainVisual;
