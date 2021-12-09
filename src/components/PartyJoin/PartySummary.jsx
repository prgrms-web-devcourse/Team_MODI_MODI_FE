import PropTypes from 'prop-types';
import { Paper, Typography, Box } from '@mui/material';
import { AirlineSeatReclineExtra, MonetizationOn } from '@mui/icons-material';
import { priceToString } from 'utils/priceToString';

const PartySummary = ({
  partyId,
  grade,
  price,
  maxMemberCapacity,
  currentMemberCapacity,
  startDate,
  startsIn,
  endDate,
  period,
  mustFilled,
  onClickParty,
}) => {
  const handleClickParty = () => {
    onClickParty(partyId);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: '16px',
        cursor: 'pointer',
        p: 2,
        mb: 1,
      }}
      onClick={handleClickParty}
    >
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ mr: 'auto' }}>
          <Typography variant="mediumB" color="primary">
            {startsIn}
          </Typography>
          <Typography variant="smallB"> 일 후 파티 시작</Typography>
          <Typography
            variant="micro"
            color="text.secondary"
            component="div"
            sx={{
              wordBreak: 'keep-all',
              textAlign: 'right',
            }}
          >
            ~{endDate} 까지 ({period}개월)
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: 'right',
            mt: 0.5,
          }}
        >
          <Typography variant="micro" component="div">
            {grade}
          </Typography>
          <MonetizationOn
            color="primary"
            sx={{
              fontSize: 16,
              verticalAlign: 'sub',
            }}
          />
          <Typography variant="micro">월 </Typography>
          <Typography variant="microB"> {priceToString(price)}</Typography>
          <Typography variant="micro">원</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <Box mt={1.5} mr="auto">
          {[1, 2, 3, 4].map(member => (
            <AirlineSeatReclineExtra
              fontSize="large"
              key={member}
              color={member <= currentMemberCapacity ? 'secondary' : 'modiGray'}
            />
          ))}
        </Box>
        <Typography
          color="text.disabled"
          component="div"
          sx={{
            mt: 'auto',
            ml: 0,
            fontSize: '12px',
            fontWeight: 500,
            textAlign: 'right',
          }}
        >
          {!mustFilled && '모집인원을 채워야 파티가 시작됩니다.'}
        </Typography>
      </Box>
    </Paper>
  );
};

PartySummary.propTypes = {
  partyId: PropTypes.number,
  grade: PropTypes.string,
  price: PropTypes.number,
  maxMemberCapacity: PropTypes.number,
  currentMemberCapacity: PropTypes.number,
  startDate: PropTypes.string,
  startsIn: PropTypes.number,
  endDate: PropTypes.string,
  period: PropTypes.number,
  mustFilled: PropTypes.bool,
  onClickParty: PropTypes.func,
};

export default PartySummary;
