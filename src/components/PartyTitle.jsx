import { Box } from '@mui/system';
import PropTypes from 'prop-types';

const PartyTitle = ({ ottName }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        boxSizing: 'border-box',
        height: '80px',
        ml: 3,
        mr: 3,
        border: '1px solid',
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box
          sx={{
            width: '72px',
            height: '72px',
            border: '1px solid',
          }}
        />
        <Box>
          <div>디즈니 플러스</div>
          <div>스탠다드</div>
        </Box>
      </Box>
      <Box ml="auto">
        <div>월 3500 P(2개월)</div>
        <div>수수료 350P</div>
        <div>총 7000P</div>
      </Box>
    </Box>
  );
};

export default PartyTitle;

PartyTitle.propTypes = {
  ottName: PropTypes.string.isRequired,
};
