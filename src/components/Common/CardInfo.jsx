import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const CardInfo = ({ label, children }) => {
  return (
    <Box pl={6} pr={6}>
      <Typography variant="micro">{label}</Typography>
      <Box
        sx={{
          width: '100%',
          height: 24,
          bgcolor: 'white',
          borderRadius: '12px',
          borderBottom: '1px solid #eeeeee',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

CardInfo.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default CardInfo;
