import PropTypes from 'prop-types';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { priceToString } from 'utils/priceToString';

const MyPageTitle = ({ username, points, onClickCharge }) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 1,
      }}
    >
      <Typography color="primary.contrastText" variant="mediumB">
        안녕하세요, {username}님
      </Typography>
      <Box
        sx={{
          mt: 2,
        }}
      >
        <Typography color="primary.contrastText" variant="smallB" component="p">
          나의 포인트
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="visual"
            sx={{
              marginRight: 1,
              fontSize: 50,
              color: '#F0E07E',
            }}
          >
            {priceToString(points)}
          </Typography>
          <Avatar
            sx={{
              pl: 0.3,
              width: 25,
              height: 25,
              fontSize: 15,
              fontWeight: 700,
              backgroundColor: '#668F90',
            }}
          >
            P
          </Avatar>
        </Box>
        <Button
          variant="contained"
          sx={{
            m: 2,
          }}
          style={{
            minWidth: '40%',
            height: 40,
          }}
          onClick={onClickCharge}
        >
          충전하기
        </Button>
      </Box>
    </Box>
  );
};

MyPageTitle.propTypes = {
  username: PropTypes.string,
  points: PropTypes.number,
  onClickCharge: PropTypes.func,
};

export default MyPageTitle;
