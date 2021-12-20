import PropTypes from 'prop-types';
import { Paper, Typography, Box } from '@mui/material';
import { Face, MonetizationOn } from '@mui/icons-material';
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
      elevation={2}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: '1rem',
        p: 3,
        mb: 1,
        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.15)',
        cursor: 'pointer',
      }}
      onClick={handleClickParty}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box sx={{ mr: 'auto' }}>
          <Typography variant="large" color="primary">
            {startsIn}
          </Typography>
          <Typography variant="baseB"> 일 후 파티 시작</Typography>
          <Typography
            variant="micro"
            color="text.secondary"
            component="div"
            align="left"
            mt={0.5}
            sx={{
              wordBreak: 'keep-all',
            }}
          >
            {endDate} 까지 ({period}개월)
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: 'right',
          }}
        >
          <Typography variant="small" component="p">
            {grade}
          </Typography>
          <Typography variant="small" component="p">
            <MonetizationOn
              color="primary"
              sx={{
                fontSize: 18,
                verticalAlign: 'sub',
              }}
            />
            월<Typography variant="mediumB"> {priceToString(price)}</Typography>
            원
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          pt: 1,
          rowGap: 1,
        }}
      >
        <Box sx={{ height: '35px' }}>
          {Array.from({ length: maxMemberCapacity }, (_, i) => i).map(index => (
            <Face
              fontSize="large"
              key={index}
              color={index < currentMemberCapacity ? 'secondary' : 'modiGray'}
            />
          ))}
        </Box>
        {!mustFilled && (
          <Typography color="text.disabled" variant="micro" component="p">
            모집인원을 채워야 파티가 시작됩니다.
          </Typography>
        )}
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
