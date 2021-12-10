import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import OttLogo from 'components/Ott/OttLogo';

const CardSlide = ({ ottId, ottName, watingCount }) => {
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
        <OttLogo ottName={ottName} size={24} />
        <Typography
          variant="baseB"
          component="p"
          sx={{
            verticalAlign: 'middle',
            ml: 0.5,
            position: 'relative',
            top: -5,
          }}
        >
          {ottName}에서 <Typography variant="large">{watingCount}</Typography>
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
          ottId={ottId}
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

export default CardSlide;
