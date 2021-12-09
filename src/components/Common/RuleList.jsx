import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import RuleToggle from './RuleToggle';
import { useState } from 'react';

const RuleList = ({ rules, onSelectRule }) => {
  const [ruleList, setRuleList] = useState(rules);

  const handleSelectRule = ({ selectedId }) => {
    const newRuleList = ruleList.map(({ ruleId, ruleName, isSelected }) => {
      if (ruleId === selectedId) {
        isSelected = !isSelected;
      }

      return {
        ruleId,
        ruleName,
        isSelected,
      };
    });

    setRuleList(newRuleList);
    onSelectRule(newRuleList);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {ruleList.map(({ ruleId, ruleName, isSelected }) => (
        <RuleToggle
          key={ruleId}
          ruleId={ruleId}
          ruleName={ruleName}
          isSelected={isSelected}
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
