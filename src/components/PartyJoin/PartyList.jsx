import PropTypes from 'prop-types';
import { List, ListItem } from '@mui/material';
import PartySummary from './PartySummary';

const PartyList = ({ parties, onClickParty }) => {
  const handleClickParty = partyId => {
    onClickParty && onClickParty(partyId);
  };

  return (
    <List
      sx={{
        width: '100%',
        padding: 0,
      }}
    >
      {parties.map(
        ({
          partyId,
          grade,
          totalPrice,
          partyMemberCapacity,
          currentMember,
          startDate,
          startsIn,
          endDate,
          period,
          mustFilled,
        }) => (
          <ListItem
            key={partyId}
            sx={{
              p: 0,
              width: '100%',
            }}
          >
            <PartySummary
              partyId={partyId}
              grade={grade}
              price={totalPrice / period}
              maxMemberCapacity={partyMemberCapacity}
              currentMemberCapacity={currentMember}
              startDate={startDate}
              startsIn={startsIn}
              endDate={endDate}
              period={period}
              mustFilled={mustFilled}
              onClickParty={handleClickParty}
            />
          </ListItem>
        ),
      )}
    </List>
  );
};

PartyList.propTypes = {
  parties: PropTypes.array,
  onClickParty: PropTypes.func,
};

export default PartyList;
