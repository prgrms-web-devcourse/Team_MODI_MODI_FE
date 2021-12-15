import PropTypes from 'prop-types';
import {
  CreatePartyTitle,
  MemberCounter,
  ConfirmDialog,
} from 'components/PartyCreate';

const StepMemberSelect = ({
  memberCount,
  onCounterClick,
  mustFilled,
  onConfirm,
}) => {
  return (
    <>
      <CreatePartyTitle subTitle="파티에 몇 명을 모집하고 싶나요?" />
      <MemberCounter
        memberCount={memberCount}
        onCounterClick={onCounterClick}
      />
      <ConfirmDialog mustFilled={mustFilled} onConfirm={onConfirm} />
    </>
  );
};

StepMemberSelect.propTypes = {
  memberCount: PropTypes.number,
  onCounterClick: PropTypes.func,
  onConfirm: PropTypes.func,
  mustFilled: PropTypes.bool,
};

export default StepMemberSelect;
