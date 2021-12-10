import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import popcornLogoSrc from 'assets/popcorn-logo.svg';

const MainVisual = () => {
  return (
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
      <SymbolImg src={popcornLogoSrc} alt="" />
    </VisualBox>
  );
};

const VisualBox = styled(Box)`
  overflow: hidden;
  position: relative;
  padding: 12vh 30px;
  height: 78vw;
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

const SymbolImg = styled('img')`
  display: block;
  position: absolute;
  bottom: 9vw;
  right: 6vw;
  width: 38vw;
  img {
    display: block;
    object-fit: contain;
  }
`;

export default MainVisual;
