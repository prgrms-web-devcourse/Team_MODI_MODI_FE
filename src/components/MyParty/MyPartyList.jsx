import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MyPartySummary from 'components/MyParty/MyPartySummary';

const MyPartyList = ({ myParties }) => {
  const handleClickParty = partyId => {
    console.log(partyId);
  };

  return (
    <Box>
      {myParties.map(party => {
        if (party.isLeader) {
          const {
            partyId,
            ottId,
            ottName,
            startDate,
            endDate,
            isLeader,
            monthlyReimbursement,
          } = party;

          return (
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
          );
        } else {
          const {
            partyId,
            ottId,
            ottName,
            startDate,
            endDate,
            isLeader,
            monthlyFee,
            totalFee,
          } = party;

          return (
            <MyPartySummary
              key={partyId}
              partyId={partyId}
              ottId={ottId}
              ottName={ottName}
              startDate={startDate}
              endDate={endDate}
              isLeader={isLeader}
              monthlyFee={monthlyFee}
              totalFee={totalFee}
              onClickParty={handleClickParty}
            />
          );
        }
      })}
    </Box>
  );
};

MyPartyList.propTypes = {
  myParties: PropTypes.array,
};

export default MyPartyList;
