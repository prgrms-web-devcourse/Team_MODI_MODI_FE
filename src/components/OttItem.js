import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { makeStyles } from '@mui/styles';
import { Avatar, Box, Typography } from '@mui/material';

const ottImage = {
  1: 'netflix',
  2: 'disneyPlus',
  3: 'wave',
  4: 'watcha',
};

const Button = styled.button`
  background-color: white;
  border: 0px;
`;

const useStyles = makeStyles({
  avatar: {
    filter: 'grayscale(100%)',
    cursor: 'pointer',
  },
  selectedAvatar: {
    filter: 'grayscale(0%)',
    cursor: 'pointer',
  },
});

const OttItem = ({ ottId, ottName, selectedId, onSelectOtt }) => {
  const classes = useStyles();

  const handleClickOtt = () => {
    onSelectOtt(ottId);
  };

  return (
    <Button>
      <Box
        className={
          ottId === selectedId ? classes.selectedAvatar : classes.avatar
        }
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          p: 1,
          m: 1,
        }}
      >
        <Avatar
          sx={{
            m: 1,
          }}
          alt="OttName"
          src={ottImage[ottId]} // 로고이미지 추가 후 수정.
          onClick={handleClickOtt}
        />
        <Typography variant="p" align="center">
          {ottName}
        </Typography>
      </Box>
    </Button>
  );
};

OttItem.propTypes = {
  ottId: PropTypes.number,
  ottName: PropTypes.string,
  selectedId: PropTypes.number,
  onSelectOtt: PropTypes.func,
};

export default OttItem;
