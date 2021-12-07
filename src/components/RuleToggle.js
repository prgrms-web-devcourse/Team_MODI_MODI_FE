import { useState } from 'react';
import PropTypes from 'prop-types';
import { Chip } from '@mui/material';
import styled from '@emotion/styled';

const Button = styled.button`
  background-color: white;
  border: 0px;
`;

const RuleToggle = ({ ruleId, ruleName, isSelected, onClickRule }) => {
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
    <Button type="button">
      <Chip
        sx={{
          m: 0.5,
          cursor: 'pointer',
        }}
        color={selected ? 'primary' : 'default'}
        key={ruleId}
        label={ruleName}
        onClick={handleClickRule}
      />
    </Button>
  );
};

RuleToggle.propTypes = {
  ruleId: PropTypes.number,
  ruleName: PropTypes.string,
  isSelected: PropTypes.bool,
  onClickRule: PropTypes.func,
};

export default RuleToggle;
