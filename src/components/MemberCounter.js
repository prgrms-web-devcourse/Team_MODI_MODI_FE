import PropTypes from 'prop-types';
import { Add, Remove } from '@mui/icons-material';
import { Button, Grid, Typography } from '@mui/material';
import { useState } from 'react';

const MemberCounter = ({ member }) => {
  const [count, setCount] = useState(member);

  const onDecrease = () => {
    count > 1 && setCount((prevCount) => prevCount - 1);
  };

  const onIncrease = () => {
    count < 3 && setCount((prevCount) => prevCount + 1);
  };

  return (
    <Grid
      container
      sx={{
        color: 'black',
        boxShadow: 1,
        borderRadius: 1,
        alignItems: 'center',
        textAlign: 'center',
        p: 2,
        width: 300,
        height: 100,
      }}
    >
      <Grid item xs={4}>
        <Button onClick={onDecrease}>
          <Remove />
        </Button>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h5" align="center">
          {count}명
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Button onClick={onIncrease}>
          <Add />
        </Button>
      </Grid>
    </Grid>
  );
};

MemberCounter.propTypes = {
  member: PropTypes.number.isRequired,
};

export default MemberCounter;
