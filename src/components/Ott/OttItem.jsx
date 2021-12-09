import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import OttLogo from './OttLogo';

const OttItem = ({ ottId, ottName, selected, onSelectOtt }) => {
  console.log(ottName);
  const handleClickOtt = () => {
    onSelectOtt(ottId, ottName);
  };

  return (
    <Button
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        filter: `grayscale(${selected ? 0 : 100}%)`,
        width: '25%',
        cursor: 'pointer',
        marginBottom: 4,
      }}
      onClick={handleClickOtt}
    >
      <OttLogo ottName={ottName} />
      <Typography
        variant="smallB"
        color="text.primary"
        align="center"
        component="p"
        sx={{
          mt: 1,
          wordBreak: 'keep-all',
          height: '2em',
        }}
      >
        {ottName}
      </Typography>
    </Button>
  );
};

OttItem.propTypes = {
  ottId: PropTypes.number,
  ottName: PropTypes.string,
  selected: PropTypes.bool,
  onSelectOtt: PropTypes.func,
};

export default OttItem;
