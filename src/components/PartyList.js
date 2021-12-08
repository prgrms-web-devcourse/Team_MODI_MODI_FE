import { List, ListItem } from '@mui/material';
import PropTypes from 'prop-types';
import PartySummary from './PartySummary';

const PartyList = ({ parties, onClickParty }) => {
  const handleClickParty = partyId => {
    onClickParty && onClickParty(partyId);
  };

  return (
    <List sx={{ width: '100%' }}>
      {parties.map(
        ({
          partyId,
          grade,
          price,
          maxMemberCapacity,
          currentMemberCapacity,
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
              price={price}
              maxMemberCapacity={maxMemberCapacity}
              currentMemberCapacity={currentMemberCapacity}
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
