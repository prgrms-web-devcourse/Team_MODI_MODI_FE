import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import RuleToggle from './RuleToggle';
import { useState } from 'react';

const RuleList = ({ rules }) => {
  const [selectedRules, setSelectedRules] = useState([]);

  const handleSelectRule = ruleId => {
    if (selectedRules.indexOf(ruleId) >= 0) {
      const newSelectedRules = selectedRules.filter(rule => rule !== ruleId);
      setSelectedRules(newSelectedRules);
    } else {
      setSelectedRules([...selectedRules, ruleId]);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        p: 1,
        m: 1,
        maxWidth: 400,
      }}
    >
      {rules.map(({ ruleId, ruleName }) => (
        <RuleToggle
          key={ruleId}
          ruleId={ruleId}
          ruleName={ruleName}
          onSelectRule={handleSelectRule}
        />
      ))}
    </Box>
  );
};

RuleList.propTypes = {
  rules: PropTypes.array,
};

export default RuleList;
