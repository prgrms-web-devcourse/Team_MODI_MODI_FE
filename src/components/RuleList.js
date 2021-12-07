import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import RuleToggle from './RuleToggle';
import { useState } from 'react';

const RuleList = ({ rules, onSelectRule }) => {
  const [selectedRules, setSelectedRules] = useState([]);

  const handleSelectRule = ({ ruleId, ruleName }) => {
    let newSelectedRules = [];
    if (selectedRules.some(({ currentId }) => currentId === ruleId)) {
      newSelectedRules = selectedRules.filter(
        ({ currentId }) => currentId !== ruleId,
      );
      console.log(`야${newSelectedRules}`);
      setSelectedRules(newSelectedRules);
    } else {
      newSelectedRules = [...selectedRules, ruleId];
      setSelectedRules(newSelectedRules);
    }
    onSelectRule(newSelectedRules);
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
          onClickRule={handleSelectRule}
        />
      ))}
    </Box>
  );
};

RuleList.propTypes = {
  rules: PropTypes.array,
  onSelectRule: PropTypes.func,
};

export default RuleList;
