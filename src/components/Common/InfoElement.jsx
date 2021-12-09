import { Typography, Box } from '@mui/material';
import { PropTypes } from 'prop-types';

const InfoElement = ({ name, info }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        pt: 1,
        pb: 1,
        m: 0,
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

InfoElement.propTypes = {
  name: PropTypes.string,
  info: PropTypes.string,
};

export default InfoElement;
