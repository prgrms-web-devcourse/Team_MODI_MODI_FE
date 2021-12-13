import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MyPartySummary from './MyPartySummary';

const MyPartyList = ({ parties }) => {
  const handleClickParty = partyId => {};

  return (
    <Box>
      {parties.map(({ partyId, ...props }) => (
        <MyPartySummary
          key={partyId}
          partyId={partyId}
          {...props}
          onClickParty={handleClickParty}
        />
      ))}
    </Box>
  );
};

MyPartyList.propTypes = {
  parties: PropTypes.array,
};

export default MyPartyList;
