import PartyTitle from './PartyTitle';
import PropTypes from 'prop-types';
import RuleList from './RuleList';

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
      <RuleList rules={rules} />
    </>
  );
};

PartyDetail.propTypes = {
  partyDetail: PropTypes.object,
};

export default PartyDetail;
