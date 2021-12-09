import { Typography, Box } from '@mui/material';
import { PropTypes } from 'prop-types';

const PartyInfo = ({ name, info }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: 0,
      }}
      component="dl"
    >
      <Typography color="text.secondary" variant="small" component="dt">
        {name}
      </Typography>
      <Typography variant="small" component="dd">
        {info}
      </Typography>
    </Box>
  );
};

PartyInfo.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
};

export default PartyInfo;
