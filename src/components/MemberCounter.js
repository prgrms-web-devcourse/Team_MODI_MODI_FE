import PropTypes from 'prop-types';
import { Add, Remove } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';

const MemberCounter = ({ member, onClick }) => {
  const [count, setCount] = useState(member);

  const onDecrease = () => {
    count > 1 && setCount(prevCount => prevCount - 1);
    onClick(count - 1);
  };

  const onIncrease = () => {
    count < 3 && setCount(prevCount => prevCount + 1);
    onClick(count + 1);
  };

  return (
    <Grid
      container
      sx={{
        color: 'black',
        boxShadow: 1,
        borderRadius: 20,
        alignItems: 'center',
        textAlign: 'center',
        p: 1,
        m: 1,
        width: '90%',
        height: 100,
      }}
    >
      <Grid item xs={4}>
        <Button disabled={count === 1} onClick={onDecrease}>
          <Remove />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" align="center">
          {count}명
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Button disabled={count === 3} onClick={onIncrease}>
          <Add />
        </Button>
      </Grid>
    </Grid>
  );
};

MemberCounter.propTypes = {
  member: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default MemberCounter;
