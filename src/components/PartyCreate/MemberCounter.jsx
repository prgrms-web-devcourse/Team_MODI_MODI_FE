import PropTypes from 'prop-types';
import { Button, Grid, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const MemberCounter = ({ memberCount, onCounterClick }) => {
  const onDecrease = () => {
    memberCount > 1 && onCounterClick(memberCount - 1);
  };

  const onIncrease = () => {
    memberCount < 3 && onCounterClick(memberCount + 1);
  };

  return (
    <Grid
      container
      sx={{
        height: 96,
        borderRadius: 20,
        border: '1px solid #bbb',
        alignItems: 'center',
        textAlign: 'center',
        mb: 3,
      }}
    >
      <Grid item xs={4}>
        <Button disabled={memberCount === 1} onClick={onDecrease}>
          <Remove />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="large" align="center" color="text.primary">
          {memberCount}명
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Button disabled={memberCount === 3} onClick={onIncrease}>
          <Add />
        </Button>
      </Grid>
    </Grid>
  );
};

MemberCounter.propTypes = {
  memberCount: PropTypes.number.isRequired,
  onCounterClick: PropTypes.func,
};

export default MemberCounter;
