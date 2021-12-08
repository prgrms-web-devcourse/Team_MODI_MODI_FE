import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import { StarRate } from '@mui/icons-material';
import netflix from 'assets/netflix.png';
import watcha from 'assets/watcha.png';
import wavve from 'assets/wavve.png';
import tving from 'assets/tving.png';
import disney from 'assets/disney.png';
import laftel from 'assets/laftel.png';
import coupangPlay from 'assets/coupang-play.png';
import primevideo from 'assets/primevideo.png';
import { priceToString } from 'utils/priceToString';

const ottImage = {
  1: netflix,
  2: watcha,
  3: wavve,
  4: tving,
  5: disney,
  6: laftel,
  7: coupangPlay,
  8: primevideo,
};

const MyPartySummary = ({
  ottId,
  ottName,
  startDate,
  endDate,
  isLeader,
  monthlyReimbursement,
}) => {
  return (
    <Box>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          marginTop: 2,
        }}
      >
        <Avatar
          alt="OttName"
          src={ottImage[ottId]}
          sx={{
            width: 72,
            height: 72,
            marginBottom: 1,
            marginRight: 2,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant="mediumB">
            {ottName}
            {isLeader && (
              <StarRate
                sx={{
                  color: 'red',
                }}
                fontSize="small"
              />
            )}
          </Typography>
          <Typography color="text.secondary">
            {startDate} - {endDate}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Typography variant="mediumB">
            월 {priceToString(monthlyReimbursement)}원
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

MyPartySummary.propTypes = {
  ottId: PropTypes.number,
  ottName: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  isLeader: PropTypes.bool,
  monthlyReimbursement: PropTypes.number,
};

export default MyPartySummary;
