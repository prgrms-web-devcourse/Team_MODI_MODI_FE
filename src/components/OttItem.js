import PropTypes from 'prop-types';
import { Avatar, Button, Typography } from '@mui/material';

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
    >
      <Avatar
        sx={{
          m: 1,
          cursor: 'pointer',
        }}
        alt="OttName"
        src="" // 로고이미지 추가 후 수정.
        onClick={handleClickOtt}
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
