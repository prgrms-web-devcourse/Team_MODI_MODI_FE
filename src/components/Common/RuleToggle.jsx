import { useState } from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@mui/material';

const RuleToggle = ({
  ruleId,
  ruleName,
  isSelected,
  onClickRule,
  clickable,
}) => {
  const [selected, setSelected] = useState(isSelected);

  const handleClickRule = () => {
    setSelected(prev => !prev);

    onClickRule({
      selectedId: ruleId,
      selectedName: ruleName,
      selected: !selected,
    });
  };

  return (
    <Chip
      sx={{
        cursor: 'pointer',
        m: 0.5,
      }}
      style={{
        opacity: 1,
      }}
      color={selected ? 'primary' : 'default'}
      key={ruleId}
      label={ruleName}
      disabled={!clickable}
      onClick={handleClickRule}
      component="button"
    />
  );
};

RuleToggle.defaultProps = {
  isSelected: false,
  clickable: true,
};

RuleToggle.propTypes = {
  ruleId: PropTypes.number,
  ruleName: PropTypes.string,
  isSelected: PropTypes.bool,
  onClickRule: PropTypes.func,
  clickable: PropTypes.bool,
};

export default RuleToggle;
