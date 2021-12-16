import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { RuleList } from 'components/Common';

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
        variant="baseB"
        component="div"
        color="text.secondary"
        sx={{
          textAlign: 'left',
          mb: 2,
        }}
      >
        파티 규칙
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
