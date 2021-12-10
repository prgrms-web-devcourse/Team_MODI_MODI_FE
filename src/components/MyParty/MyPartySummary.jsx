import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Typography } from '@mui/material';
import {
  AddCircleOutline,
  RemoveCircleOutline,
  StarRate,
} from '@mui/icons-material';
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
  partyId,
  ottId,
  ottName,
  startDate,
  endDate,
  isLeader,
  monthlyReimbursement = 0,
  monthlyFee = 0,
  totalFee = 0,
  onClickParty,
}) => {
  const handleClickParty = () => {
    onClickParty(partyId);
  };

  const feeRender = isLeader => {
    if (isLeader) {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AddCircleOutline color="secondary" fontSize="small" />
          <Typography variant="mediumB">
            월 {priceToString(monthlyReimbursement)}원
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            textAlign: 'right',
          }}
        >
          <Typography variant="mediumB" component="p">
            월 {priceToString(monthlyFee)}원
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <RemoveCircleOutline color="error" fontSize="small" />
            <Typography variant="mediumB">
              총 {priceToString(totalFee)}원
            </Typography>
          </Box>
        </Box>
      );
    }
  };

  return (
    <Box
      sx={{
        marginBottom: 2,
        cursor: 'pointer',
      }}
      onClick={handleClickParty}
    >
      <Box
        sx={{
          display: 'flex',
          marginBottom: 2,
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
            flexGrow: 1,
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
          {feeRender(isLeader)}
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

MyPartySummary.propTypes = {
  partyId: PropTypes.number,
  ottId: PropTypes.number,
  ottName: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  isLeader: PropTypes.bool,
  monthlyReimbursement: PropTypes.number,
  monthlyFee: PropTypes.number,
  totalFee: PropTypes.number,
  onClickParty: PropTypes.func,
};

export default MyPartySummary;
