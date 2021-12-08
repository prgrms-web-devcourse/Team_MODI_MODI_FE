import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Rule = ({ ruleName }) => {
  return (
    <Box
      sx={{
        height: '34px',
        lineHeight: '34px',
        borderRadius: '17px',
        bgcolor: '#eeeeee',
      }}
    >
      <Typography variant="small" color="text.primary" ml={1} mr={1}>
        {ruleName}
      </Typography>
    </Box>
  );
};

Rule.propTypes = {
  ruleName: PropTypes.string,
};

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
          gap: 1,
          mt: 1,
          mb: 1,
        }}
      >
        {rules.map(({ ruleId, ruleName }) => (
          <Rule key={ruleId} ruleName={ruleName} />
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
