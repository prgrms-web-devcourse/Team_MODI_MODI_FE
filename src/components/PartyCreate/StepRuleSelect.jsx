import PropTypes from 'prop-types';
import { CreatePartyTitle } from 'components/PartyCreate';
import { RuleList } from 'components/Common';

const StepRuleSelect = ({ rules, onSelectRule }) => {
  return (
    <>
      <CreatePartyTitle subTitle="이 파티의 규칙은 어떻게 지정할까요?" />
      <RuleList rules={rules} onSelectRule={onSelectRule} />
    </>
  );
};

StepRuleSelect.propTypes = {
  rules: PropTypes.array,
  onSelectRule: PropTypes.func,
};

export default StepRuleSelect;
