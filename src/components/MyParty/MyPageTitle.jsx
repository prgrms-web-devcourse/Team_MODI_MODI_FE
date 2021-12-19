import PropTypes from 'prop-types';
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { priceToString } from 'utils/priceToString';
import { Edit } from '@mui/icons-material';
import { styled } from '@mui/system';

const MyPageTitle = ({
  username,
  points,
  onClickCharge,
  onClickEditButton,
  onClickLogout,
}) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 1,
        p: '20px 30px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography color="primary.contrastText" variant="medium">
            안녕하세요,
            <Typography color="#F0E07E" variant="mediumB" component="span">
              {username}
            </Typography>
            님
          </Typography>

          <EditButton onClick={onClickEditButton} />
        </Box>
        <IconButton
          aria-label="logout"
          size="small"
          sx={{
            bgcolor: 'rgba(0,0,0,0.3)',
          }}
          onClick={onClickLogout}
        >
          <LogoutIcon
            sx={{
              width: '18px',
              height: '18px',
              pl: '3px',
              color: '#fff',
            }}
          />
        </IconButton>
      </Box>
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
            mt: -1,
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
  onClickLogout: PropTypes.func,
  onClickEditButton: PropTypes.func,
};

const EditButton = styled(Edit)`
  margin-left: 5px;
  width: 20px;
  color: white;
  cursor: pointer;
  :hover {
    color: #fbeda4;
  }
`;

export default MyPageTitle;
