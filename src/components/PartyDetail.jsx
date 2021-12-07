import PartyTitle from './PartyTitle';
import PropTypes from 'prop-types';
import RuleContainer from './Rule';
import PartyInfo from './PartyInfo';
import { Button } from '@mui/material';

const PartyDetail = ({ partyDetail }) => {
  const { ottName, grade, monthlyFee, period, rules, startDate, endDate } =
    partyDetail;

  return (
    <>
      <PartyTitle
        ottName={ottName}
        ottGrade={grade}
        monthlyPrice={monthlyFee}
        servicePeriod={period}
      />
      <PartyInfo
        ottName={ottName}
        ottGrade={grade}
        startDate={startDate}
        endDate={endDate}
        period={period}
        monthlyFee={monthlyFee}
      />
      <RuleContainer rules={rules} />
      <Button
        variant="contained"
        sx={{
          width: '100%',
          mt: 2,
        }}
        size="large"
      >
        파티 참여하기
      </Button>
    </>
  );
};

PartyDetail.propTypes = {
  partyDetail: PropTypes.object,
  myPoint: PropTypes.number,
};

export default PartyDetail;
