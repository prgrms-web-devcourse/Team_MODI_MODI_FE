import PartyTitle from 'components/PartyTitle';
import PropTypes from 'prop-types';
import RuleContainer from 'components/Common/Rule';
import PartyInfo from 'components/PartyJoin/PartyInfo';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import PartyMemberList from 'components/Common/PartyMemberList';

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
