import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';
import OttLogo from 'components/Ott/OttLogo';

const CardSlide = ({ ottName, watingCount }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        width: '80%',
        minWidth: 280,
        borderRadius: 3,
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
  ottName: PropTypes.string,
  watingCount: PropTypes.string,
};

export default CardSlide;
