import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MyPartySummary from './MyPartySummary';

const MyPartyList = ({ parties, onClickParty }) => {
  return (
    <Box>
      {parties.map(({ partyId, ...props }) => (
        <MyPartySummary
          key={partyId}
          partyId={partyId}
          {...props}
          onClickParty={onClickParty}
        />
      ))}
    </Box>
  );
};

MyPartyList.propTypes = {
  parties: PropTypes.array,
  onClickParty: PropTypes.func,
};

export default MyPartyList;
