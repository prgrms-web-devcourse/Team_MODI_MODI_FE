import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import PartyTitle from 'components/PartyTitle';
import RuleContainer from 'components/Common/Rule';
import PartyMemberList from 'components/Common/PartyMemberList';
import PartyInfo from 'components/PartyJoin/PartyInfo';

const PartyDetail = ({ partyDetail }) => {
  const {
    partyId,
    ottName,
    grade,
    monthlyFee,
    period,
    rules,
    startDate,
    endDate,
    members,
  } = partyDetail;

  const navigate = useNavigate();
  const handleNavigatePaymentPage = useCallback(() => {
    navigate(`/payment?partyId=${partyId}`);
  }, [navigate, partyId]);

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
      <PartyMemberList members={members} />
      <Button
        variant="contained"
        sx={{
          width: '100%',
          mt: 2,
        }}
        size="large"
        onClick={handleNavigatePaymentPage}
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
