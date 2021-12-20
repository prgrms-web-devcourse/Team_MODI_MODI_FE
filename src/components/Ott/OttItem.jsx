import PropTypes from 'prop-types';
import { Button, Typography } from '@mui/material';
import OttLogo from './OttLogo';
import theme from 'styles/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

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

  const mdDownMatches = useMediaQuery(theme.breakpoints.down('md'));
  const smDownMatches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Button
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        opacity: toggleable ? (selected ? 1 : 0.5) : 1,
        filter: `grayscale(${toggleable ? (selected ? 0 : 70) : 0}% )`,
        width: smDownMatches ? '33.333%' : '25%',
        cursor: 'pointer',
        bgcolor: 'transparent',
        padding: 0,
      }}
      onClick={handleClickOtt}
    >
      <OttLogo ottName={ottName} size={mdDownMatches ? 52 : 72} />
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
