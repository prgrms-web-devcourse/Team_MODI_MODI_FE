import PropTypes from 'prop-types';
import {
  CreatePartyTitle,
  PartyStartDate,
  PartyPeriod,
} from 'components/PartyCreate';

const StepPartyPeriod = ({
  startDate,
  onSelectStartDate,
  period,
  onSelectPeriod,
}) => {
  return (
    <>
      <CreatePartyTitle subTitle="얼마 동안 함께 이용하고 싶나요?" />
      <PartyStartDate
        startDate={startDate}
        onSelectStartDate={onSelectStartDate}
      />
      <PartyPeriod period={period} onSelectPeriod={onSelectPeriod} />
    </>
  );
};

StepPartyPeriod.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  onSelectPeriod: PropTypes.func,
  onSelectStartDate: PropTypes.func,
  period: PropTypes.number,
};

export default StepPartyPeriod;
