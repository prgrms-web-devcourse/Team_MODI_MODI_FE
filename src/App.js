import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const globalStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

function App() {
  const classes = globalStyles();

  return (
    <div className={classes.root}>
      <Typography color="modiGray" variant="h2">
        MODI
      </Typography>
      <Button color="primary" variant="contained">
        primary
      </Button>
      <Button color="secondary" variant="contained">
        secondary
      </Button>
      <Button color="thirdary" variant="contained">
        thirdary
      </Button>
    </div>
  );
}

export default App;
