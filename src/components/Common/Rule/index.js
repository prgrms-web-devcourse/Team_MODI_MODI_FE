import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import RuleToggle from 'components/Common/RuleToggle';

const RuleContainer = ({ rules }) => {
  return (
    <Box
      sx={{
        pt: 2,
        pb: 1,
        borderBottom: '2px dashed #eeeeee',
      }}
    >
      <Typography
        variant="small"
        component="div"
        color="text.secondary"
        sx={{ textAlign: 'left' }}
      >
        파티 규칙
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          mt: 1,
          mb: 1,
        }}
      >
        {rules.map(({ ruleId, ruleName }) => (
          <RuleToggle key={ruleId} ruleName={ruleName} clickable={false} />
        ))}
      </Box>
    </Box>
  );
};

RuleContainer.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.exact({
      ruleId: PropTypes.number,
      ruleName: PropTypes.string,
    }),
  ),
};

export default RuleContainer;
