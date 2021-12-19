import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import PartyMember from './PartyMember';

const PartyMemberList = ({ members, partyMemberCapacity }) => {
  const waitingMemeber = () => {
    const waitingMemberList = [];
    for (let i = members.length + 1; i <= partyMemberCapacity; i++) {
      waitingMemberList.push(<PartyMember key={i} isWaiting={true} />);
    }

    return waitingMemberList;
  };

  return (
    <Box sx={{ p: '24px 0' }}>
      <Typography
        sx={{
          textAlign: 'left',
          mb: 1,
        }}
        variant="baseB"
        component="div"
      >
        파티인원
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '4px',
        }}
      >
        {members.map(({ userId, username, leader }) => (
          <PartyMember
            key={userId}
            isWaiting={false}
            username={username}
            leader={leader}
          />
        ))}
        {waitingMemeber()}
      </Box>
    </Box>
  );
};

PartyMemberList.propTypes = {
  members: PropTypes.array,
  partyMemberCapacity: PropTypes.number,
};

export default PartyMemberList;
