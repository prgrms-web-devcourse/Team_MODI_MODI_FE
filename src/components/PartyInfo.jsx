import { Typography, Box } from '@mui/material';
import { PropTypes } from 'prop-types';

const PartyInfo = ({ name, info }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography color="text.secondary" variant="small">
        {name}
      </Typography>
      <Typography variant="small">{info}</Typography>
    </Box>
  );
};

PartyInfo.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
};

export default PartyInfo;
