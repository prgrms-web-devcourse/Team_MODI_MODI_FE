import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MyPartySummary from 'components/MyPartySummary';

const MyPartyList = ({ myParties }) => {
  const handleClickParty = partyId => {
    console.log(partyId);
  };

  return (
    <Box>
      {myParties.map(
        ({
          partyId,
          ottId,
          ottName,
          startDate,
          endDate,
          isLeader,
          monthlyReimbursement,
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
            onClickParty={handleClickParty}
          />
        ),
      )}
    </Box>
  );
};

MyPartyList.propTypes = {
  myParties: PropTypes.array,
};

export default MyPartyList;
