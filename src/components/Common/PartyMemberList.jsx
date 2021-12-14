import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import PartyMember from './PartyMember';

const PartyMemberList = ({ members }) => {
  const waitingMemeber = () => {
    const waitingMemberList = [];
    for (let i = members.length + 1; i <= 4; i++) {
      waitingMemberList.push(<PartyMember key={i} isWaiting={true} />);
    }

    return waitingMemberList;
  };

  return (
    <>
      <Typography
        sx={{
          textAlign: 'left',
          mt: 2,
        }}
        variant="small"
        component="div"
      >
        파티인원
      </Typography>
      <Box
        sx={{
          mt: 1,
          display: 'flex',
          alignItems: 'flex-start',
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
    </>
  );
};

PartyMemberList.propTypes = {
  members: PropTypes.array,
};

export default PartyMemberList;
