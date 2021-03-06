import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';

const InfoElement = ({ left, right }) => {
  const { contentL, variantL = 'small', colorL = 'text.secondary' } = left;
  const { contentR, variantR = 'small', colorR = 'text.primary' } = right;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        m: 0,
        mb: 1,
        '&:last-child': {
          mb: 0,
        },
      }}
      component="dl"
    >
      <Typography color={colorL} variant={variantL} component="dt">
        {contentL}
      </Typography>
      <Typography color={colorR} variant={variantR} component="dd">
        {contentR}
      </Typography>
    </Box>
  );
};

InfoElement.propTypes = {
  left: PropTypes.object,
  right: PropTypes.object,
};

export default InfoElement;
