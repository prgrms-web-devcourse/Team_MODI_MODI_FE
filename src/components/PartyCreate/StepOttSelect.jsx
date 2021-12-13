import PropTypes from 'prop-types';
import OttList from 'components/Ott/OttList';
import CreatePartyTitle from './CreatePartyTitle';

const StepOttSelect = ({ ottServices, onSelectOtt, ottId }) => {
  return (
    <>
      <CreatePartyTitle subTitle="어떤 서비스를 함께 이용하고 싶나요?" />
      <OttList
        ottServices={ottServices}
        onSelectOtt={onSelectOtt}
        currentOttId={ottId}
      />
    </>
  );
};

StepOttSelect.propTypes = {
  ottServices: PropTypes.array,
  onSelectOtt: PropTypes.func,
  ottId: PropTypes.number,
};

export default StepOttSelect;
