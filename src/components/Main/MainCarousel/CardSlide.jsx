import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import OttLogo from 'components/Ott/OttLogo';

const CardSlide = ({ ottId, ottName, watingCount }) => {
  const countDivide = count => {
    const numbers = [];
    do {
      numbers.push(count % 10);
      count = Math.floor(count / 10);
    } while (count > 0);

    return numbers;
  };

  const handleClickRecruting = () => {
    // TODO 참여 클릭하면 해당 ott 파티 목록 보기 [링크]
    // 여기서 링크이동을 하는게 맞을까? click 이벤트를 올려서 page에서 링크처리? 아냐 버튼이 여기있는데?
    console.log(ottId, ottName);
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
          {countDivide(watingCount).map((number, i) => (
            <CounterNumber key={i} variant="large">
              {number}
            </CounterNumber>
          ))}
          명이
          <br />
          파티를 기다리고 있어요🎉
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          p: 2,
          pt: 0,
        }}
      >
        <Button
          onClick={handleClickRecruting}
          variant="contained"
          sx={[
            {
              background: '#eee',
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
          그렇다면 내가 빠질 수 없지 😎
        </Button>
      </CardActions>
    </Card>
  );
};

CardSlide.propTypes = {
  ottId: PropTypes.number,
  ottName: PropTypes.string,
  watingCount: PropTypes.number,
  onClick: PropTypes.func,
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
