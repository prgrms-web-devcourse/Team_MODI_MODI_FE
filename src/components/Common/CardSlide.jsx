import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Avatar,
  Button,
  Box,
} from '@mui/material';
import { PropTypes } from 'prop-types';

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
          alignItems: 'center',
          p: 2,
        }}
      >
        <Avatar
          size="small"
          sx={{
            width: 24,
            height: 24,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
            alignSelf: 'baseline',
            mr: 1,
            mt: '5px',
          }}
        />
        <Typography
          variant="baseB"
          component="p"
          sx={{ verticalAlign: 'middle' }}
        >
          {ottName}에서 <Typography variant="large">{watingCount}</Typography>
          명이
          <br />
          파티를 기다리고 있어요🎉
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button
          variant="contained"
          sx={[
            {
              background: '#eee',
              color: 'text.primary',
              boxShadow: 'none',
              m: '0 auto',
              p: '10px 40px',
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
