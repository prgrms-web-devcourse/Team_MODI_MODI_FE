import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import RuleToggle from './RuleToggle';

const RuleList = ({ rules, onSelectRule, clickable }) => {
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
    onSelectRule && onSelectRule(newRuleList);
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
          clickable={clickable}
        />
      ))}
    </Box>
  );
};

RuleList.defaultProps = {
  clickable: true,
};

RuleList.propTypes = {
  rules: PropTypes.array,
  initialRules: PropTypes.array,
  onSelectRule: PropTypes.func,
  clickable: PropTypes.bool,
};

export default RuleList;
