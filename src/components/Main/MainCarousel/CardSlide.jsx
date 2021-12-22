import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from '@mui/material';
import OttLogo from 'components/Ott/OttLogo';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const CardSlide = ({ ottId, ottName, waitingCount }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClickCarouselButton = () => {
    waitingCount && navigate(`recruit/${ottId}`);
    !waitingCount && navigate(`create?ottId=${ottId}`);
  };

  const cardTitleRender = () => {
    return waitingCount ? (
      <>
        {`${waitingCount}`.split('').map((number, i) => (
          <CounterNumber key={i} variant="large">
            {number}
          </CounterNumber>
        ))}
        명이
        <br />
        파티를 기다리고 있어요🎉
      </>
    ) : (
      <Box sx={{ pt: 2 }}>
        파티가 만들어지기를 기다리고 있어요 <br />
        파티장이 되어 파티원을 모아 보세요
      </Box>
    );
  };

  const cardButtonRender = () => {
    return waitingCount
      ? '그렇다면 내가 빠질 수 없지 😎'
      : '🎊 길을 비켜라 파티장 나가신다 🎊';
  };

  return (
    <Card
      sx={{
        position: 'relative',
        width: '100%',
        minWidth: 280,
        borderRadius: 3,
        flexShrink: 0,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          p: 2,
        }}
      >
        <Typography
          variant="baseB"
          component="div"
          sx={{
            verticalAlign: 'middle',
            textAlign: 'center',
          }}
        >
          <OttLogo
            ottName={ottName}
            size={24}
            sx={{
              display: 'inline-block',
              verticalAlign: 'middle',
              mr: '4px',
              mt: '-7px',
            }}
          />
          {ottName}에서
          {cardTitleRender()}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          p: 2,
          pt: 0,
        }}
      >
        <Button
          onClick={handleClickCarouselButton}
          variant="contained"
          sx={[
            {
              background: `${
                theme.palette.mode === 'light'
                  ? '#eee'
                  : theme.palette.modiGray.main
              }`,
              color: 'text.primary',
              boxShadow: 'none',
              m: '0 auto',
              p: '10px 30px',
              borderRadius: 30,
            },
            {
              '&:hover': {
                color: '#fff',
              },
            },
          ]}
        >
          {cardButtonRender()}
        </Button>
      </CardActions>
    </Card>
  );
};

CardSlide.propTypes = {
  ottId: PropTypes.number,
  ottName: PropTypes.string,
  waitingCount: PropTypes.number,
};

const CounterNumber = styled(Typography)`
  overflow: hidden;
  display: inline-block;
  position: relative;
  padding: 2px 5px;
  margin-left: 3px;
  border-radius: 5px;
  background-color: #000;
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  vertical-align: middle;
  margin-bottom: 8px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export default CardSlide;
