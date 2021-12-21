import PropTypes from 'prop-types';
import { Box, Button, IconButton, Typography } from '@mui/material';
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
    <TitleWrapper>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Typography
            color="common.white"
            variant="medium"
            component="h2"
            sx={{
              wordBreak: 'keep-all',
            }}
          >
            안녕하세요,{' '}
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
              width: 24,
              height: 24,
              pl: '3px',
              color: '#fff',
            }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          mt: 2,
          textAlign: 'center',
        }}
      >
        <Typography
          color="common.white"
          variant="base"
          component="p"
          align="center"
        >
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
            <Typography
              variant="baseB"
              sx={{
                display: 'inline-block',
                position: 'relative',
                width: 22,
                height: 22,
                borderRadius: '100%',
                color: '#fff',
                bgcolor: '#53918F',
                border: '1px solid #67A5B1',
                textAlign: 'center',
                ml: 1,
                verticalAlign: '6px',
              }}
            >
              P
            </Typography>
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            width: '190px',
            mt: 2,
          }}
          onClick={onClickCharge}
        >
          충전하기
        </Button>
      </Box>
    </TitleWrapper>
  );
};

MyPageTitle.propTypes = {
  username: PropTypes.string,
  points: PropTypes.number,
  onClickCharge: PropTypes.func,
  onClickLogout: PropTypes.func,
  onClickEditButton: PropTypes.func,
};

const TitleWrapper = styled(Box)(({ theme }) => ({
  padding: '32px 24px',
  [theme.breakpoints.down('sm')]: {
    padding: '30px 15px',
  },
}));

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
