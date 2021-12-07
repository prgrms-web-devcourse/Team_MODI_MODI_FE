import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import RuleToggle from './RuleToggle';
import { useState } from 'react';

const RuleList = ({ rules, onSelectRule }) => {
  const [selectedRules, setSelectedRules] = useState([]);

  const handleSelectRule = ({ ruleId, ruleName, isSelected }) => {
    const currentRule = {
      ruleId,
      ruleName,
    };

    let newSelectedRules = [];

    if (!isSelected) {
      newSelectedRules = selectedRules.filter(
        ({ ruleId }) => ruleId !== currentRule.ruleId,
      );
    } else {
      newSelectedRules = [...selectedRules, currentRule];
    }
    setSelectedRules(newSelectedRules);
    onSelectRule(newSelectedRules);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
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
  initialRules: PropTypes.array,
  onSelectRule: PropTypes.func,
};

export default RuleList;
