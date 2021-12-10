import PropTypes from 'prop-types';
import { Avatar, Button, Typography } from '@mui/material';
import netflix from 'assets/netflix.png';
import watcha from 'assets/watcha.png';
import wavve from 'assets/wavve.png';
import tving from 'assets/tving.png';
import disney from 'assets/disney.png';
import laftel from 'assets/laftel.png';
import coupangPlay from 'assets/coupang-play.png';
import primevideo from 'assets/primevideo.png';

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

const OttItem = ({
  ottId,
  ottName,
  selected = false,
  onSelectOtt,
  toggleable = true,
}) => {
  const handleClickOtt = () => {
    onSelectOtt(ottId, ottName);
  };

  return (
    <Button
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        opacity: toggleable ? (selected ? 1 : 0.5) : 1,
        filter: `grayscale(${toggleable ? (selected ? 0 : 70) : 0}% )`,
        width: '25%',
        cursor: 'pointer',
        bgcolor: 'transparent',
      }}
      onClick={handleClickOtt}
    >
      <Avatar
        alt="OttName"
        src={ottImage[ottId]}
        sx={{
          width: 72,
          height: 72,
          marginBottom: 1,
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
        }}
      />
      <Typography
        variant="smallB"
        color="text.primary"
        align="center"
        component="p"
        sx={{
          wordBreak: 'keep-all',
          height: '2em',
        }}
      >
        {ottName}
      </Typography>
    </Button>
  );
};

OttItem.defaultTypes = {
  selected: false,
  toggleable: true,
};

OttItem.propTypes = {
  ottId: PropTypes.number,
  ottName: PropTypes.string,
  selected: PropTypes.bool,
  onSelectOtt: PropTypes.func,
  toggleable: PropTypes.bool,
};

export default OttItem;
