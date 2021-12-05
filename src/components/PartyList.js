import { List, ListItem } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import PartySummary from './PartySummary';

const PartyList = ({ parties }) => {
  return (
    <Box sx={{ width: 400 }}>
      <List>
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
            mustFilled,
          }) => (
            <ListItem key={partyId}>
              <PartySummary
                partyId={partyId}
                grade={grade}
                price={price}
                maxMemberCapacity={maxMemberCapacity}
                currentMemberCapacity={currentMemberCapacity}
                startDate={startDate}
                startsIn={startsIn}
                endDate={endDate}
                mustFilled={mustFilled}
              />
            </ListItem>
          ),
        )}
      </List>
    </Box>
  );
};

PartyList.propTypes = {
  parties: PropTypes.array,
};

export default PartyList;
