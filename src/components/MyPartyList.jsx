import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MyPartySummary from 'components/MyPartySummary';

const MyPartyList = ({ myParties }) => {
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
            ottId={ottId}
            ottName={ottName}
            startDate={startDate}
            endDate={endDate}
            isLeader={isLeader}
            monthlyReimbursement={monthlyReimbursement}
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
