import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MyPartySummary from './MyPartySummary';

const MyPartyList = ({ parties }) => {
  const handleClickParty = partyId => {};

  return (
    <Box>
      {parties.map(
        ({
          partyId,
          ottId,
          ottName,
          startDate,
          endDate,
          isLeader,
          monthlyReimbursement,
          remainingReimbursement,
          monthlyPrice,
          totalPrice,
        }) => (
          <MyPartySummary
            key={partyId}
            partyId={partyId}
            ottId={ottId}
            ottName={ottName}
            startDate={startDate}
            endDate={endDate}
            isLeader={isLeader}
            monthlyReimbursement={monthlyReimbursement}
            remainingReimbursement={remainingReimbursement}
            monthlyPrice={monthlyPrice}
            totalPrice={totalPrice}
            onClickParty={handleClickParty}
          />
        ),
      )}
    </Box>
  );
};

MyPartyList.propTypes = {
  parties: PropTypes.array,
};

export default MyPartyList;
