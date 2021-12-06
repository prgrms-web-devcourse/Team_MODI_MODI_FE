import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import RuleToggle from './RuleToggle';
import { useState } from 'react';

const RuleList = ({ rules }) => {
  const [selectedRules, setSelectedRules] = useState([]);

  const handleSelectRule = ruleId => {
    if (selectedRules.some(rule => rule === ruleId)) {
      setSelectedRules(selectedRules.filter(rule => rule !== ruleId));
    } else {
      setSelectedRules([...selectedRules, ruleId]);
    }
    console.log(selectedRules);
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
