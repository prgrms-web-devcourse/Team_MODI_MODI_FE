import PartyTitle from './PartyTitle';
import PropTypes from 'prop-types';
import RuleContainer from './Rule';

const PartyDetail = ({ partyDetail }) => {
  const { ottName, grade, monthlyFee, period, rules } = partyDetail;

  return (
    <>
      <PartyTitle
        ottName={ottName}
        ottGrade={grade}
        monthlyPrice={monthlyFee}
        servicePeriod={period}
      />
      <RuleContainer rules={rules} />
    </>
  );
};

PartyDetail.propTypes = {
  partyDetail: PropTypes.object,
  myPoint: PropTypes.number,
};

export default PartyDetail;
