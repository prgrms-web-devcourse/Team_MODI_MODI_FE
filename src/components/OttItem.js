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

const OttItem = ({ ottId, ottName, selected, onSelectOtt }) => {
  const handleClickOtt = () => {
    onSelectOtt(ottId);
  };

  return (
    <Button
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        p: 1,
        m: 1,
        filter: `grayscale(${selected ? 0 : 100}%)`,
      }}
      onClick={handleClickOtt}
    >
      <Avatar
        sx={{
          m: 1,
          cursor: 'pointer',
        }}
        alt="OttName"
        src={ottImage[ottId]} // 로고이미지 추가 후 수정.
      />
      <Typography variant="p" align="center">
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
