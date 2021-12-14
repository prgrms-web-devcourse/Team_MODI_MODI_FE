import PropTypes from 'prop-types';
import { LogoutOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { priceToString } from 'utils/priceToString';

const MyPageTitle = ({ username, points, onClickLogout, onClickCharge }) => {
  return (
    <Box>
      <Box
        sx={{
          p: 1,
          m: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography color="primary.contrastText" variant="mediumB">
            안녕하세요, {username}님
          </Typography>
          <LogoutOutlined
            style={{
              color: 'white',
              cursor: 'pointer',
            }}
            onClick={onClickLogout}
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: 2,
          textAlign: 'center',
        }}
      >
        <Typography color="primary.contrastText" variant="microB" component="p">
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
            style={{
              marginRight: 10,
              fontSize: 50,
              color: '#F0E07E',
            }}
          >
            {priceToString(points)}
          </Typography>
          <Avatar
            style={{
              paddingLeft: 2,
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
            backgroundColor: '#7FBDBE',
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
  onClickLogout: PropTypes.func,
  onClickCharge: PropTypes.func,
};

export default MyPageTitle;
