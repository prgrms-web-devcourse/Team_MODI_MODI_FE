import { Box } from '@mui/material';
import PartyMember from './PartyMember';
import PropTypes from 'prop-types';

const PartyMemberList = ({ members }) => {
  const waitingMemeber = () => {
    const waitingMemberList = [];
    for (let i = members.length + 1; i <= 4; i++) {
      waitingMemberList.push(<PartyMember key={i} isWaiting={true} />);
    }

    return waitingMemberList;
  };

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      {members.map(({ userId, username }) => (
        <PartyMember key={userId} isWaiting={false} username={username} />
      ))}
      {waitingMemeber()}
    </Box>
  );
};

PartyMemberList.propTypes = {
  members: PropTypes.array,
};

export default PartyMemberList;
