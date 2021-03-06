import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box, CardHeader } from '@mui/material';
import { styled } from '@mui/system';

import Logo from './Logo';
import CardInfo from './CardInfo';
import CardDesign from './CardDesign';

const CardTemplate = ({ sharedInfo, isFront, blur, sharedInfoEditButton }) => {
  const sharedId = sharedInfo?.sharedId;
  const sharedPassword = sharedInfo?.sharedPassword;

  const cardTitle = (
    <>
      <Typography variant="baseB" color={isFront && 'white'}>
        계정 공유 정보
      </Typography>
      {sharedInfoEditButton}
    </>
  );

  const CardInner = () => (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: 18,
          right: 18,
        }}
      >
        <Logo color={isFront ? false : true} />
      </Box>

      <CardHeader
        title={cardTitle}
        sx={{
          pb: 1,
          pt: 0,
        }}
      />
      <CardContent
        sx={{
          pt: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardInfo label="아이디">{sharedId && sharedId}</CardInfo>
        <CardInfo label="비밀번호">{sharedPassword && sharedPassword}</CardInfo>
      </CardContent>
    </>
  );

  return (
    <StyledCard isFront={isFront} raised>
      {blur ? (
        <>
          <BlurWrapper>
            <CardDesign />
            <Glass />
          </BlurWrapper>
          <Typography
            variant="smallB"
            color="#757575"
            align="center"
            component="div"
            sx={{
              position: 'absolute',
              bottom: '16px',
              left: 0,
              right: 0,
              wordBreak: 'keep-all',
            }}
          >
            파티가 시작되면 공유계정 정보를 확인할 수 있어요~
          </Typography>
        </>
      ) : (
        <CardInner />
      )}
    </StyledCard>
  );
};

CardTemplate.propTypes = {
  isFront: PropTypes.bool,
  sharedInfo: PropTypes.shape({
    sharedId: PropTypes.string,
    sharedPassword: PropTypes.string,
  }),
  sharedInfoEditButton: PropTypes.element,
  blur: PropTypes.bool,
};

const BlurWrapper = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Glass = styled(Box)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.5);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -45%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    pointer-events: none;
    transform: skewX(345deg);
  }

  &:after {
    content: '';
    position: absolute;
    top: -40%;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.25);
    pointer-events: none;
  }
`;

const StyledCard = styled(Card, {
  shouldForwardProp: prop => prop !== 'isFront',
})`
  padding: 8px;
  flex: 1;
  width: 320px;
  height: 192px;
  border-radius: 16px;
  padding: 10px;
  color: ${({ isFront }) => (isFront ? 'white' : 'black')};
  background: ${({ isFront }) => {
    return isFront
      ? 'linear-gradient(277.45deg, #A9D976 1.01%, #BBCC4B 78.4%)'
      : 'white';
  }};
  cursor: pointer;
`;

export default CardTemplate;
