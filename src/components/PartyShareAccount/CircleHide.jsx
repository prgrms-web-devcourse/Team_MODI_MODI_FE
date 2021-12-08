import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const CircleHide = ({ isShow, onShow, children }) => {
  return (
    <Box
      sx={{
        border: '1px solid',
      }}
    >
      <Box
        sx={{
          width: 600,
          height: 300,
          border: '1px solid',
          bgcolor: 'blue',
          transition: 'all 1s',
          clipPath: isShow
            ? `circle(26.2% at 98% 10%)`
            : 'circle(132.7% at 98% 10%)',
        }}
        onClick={onShow}
      >
        {children}
      </Box>
    </Box>
  );
};

CircleHide.propTypes = {
  isShow: PropTypes.bool,
  onShow: PropTypes.func,
  children: PropTypes.node,
};

export default CircleHide;
