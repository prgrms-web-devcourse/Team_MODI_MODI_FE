import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RuleList } from 'components/Common';

const RuleContainer = ({ rules }) => {
  return (
    <Box
      sx={{
        p: '24px 0',
        borderBottom: '1px dashed #eeeeee',
      }}
    >
      <Typography
        variant="baseB"
        component="h3"
        sx={{
          mb: 1,
        }}
      >
        파티규칙
      </Typography>
      <RuleList rules={rules} clickable={false} />
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
