import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { Chip } from '@mui/material';
import { useState } from 'react';

const Button = styled.button`
  background-color: white;
  border: 0px;
`;

const RuleToggle = ({ ruleId, ruleName, onClickRule }) => {
  const [selected, setSelected] = useState(false);

  const handleClickRule = () => {
    setSelected(prev => !prev);
    onClickRule({
      ruleId,
      ruleName,
    });
  };

  return (
    <Button>
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
  onClickRule: PropTypes.func,
};

export default RuleToggle;
