import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Chip } from '@mui/material';
import { useState } from 'react';

const Button = styled.button`
  background-color: white;
  border: 0px;
`;

const RuleToggle = ({ ruleId, ruleName, onSelectRule }) => {
  const [selected, setSelected] = useState(false);

  const handleClickRule = () => {
    setSelected(!selected);
    onSelectRule(ruleId);
  };

  return (
    <Button>
      <Chip
        sx={{
          m: 0.5,
          cursor: 'pointer',
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
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
  onSelectRule: PropTypes.func,
};

export default RuleToggle;
