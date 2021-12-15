import PropTypes from 'prop-types';
import {
  CreatePartyTitle,
  SharedInfoForm,
  TermsList,
} from 'components/PartyCreate';

const StepShardInfoForm = ({
  sharedId,
  sharedPassword,
  sharedPasswordCheck,
  onChangeInfo,
}) => {
  return (
    <>
      <CreatePartyTitle subTitle="파티에서 사용하실 서비스의 계정 정보를 입력해주세요." />
      <SharedInfoForm
        sharedId={sharedId}
        sharedPassword={sharedPassword}
        sharedPasswordCheck={sharedPasswordCheck}
        onChangeInfo={onChangeInfo}
      />
      <TermsList />
    </>
  );
};

StepShardInfoForm.propTypes = {
  sharedId: PropTypes.string,
  sharedPassword: PropTypes.string,
  sharedPasswordCheck: PropTypes.string,
  onChangeInfo: PropTypes.func,
};

export default StepShardInfoForm;
