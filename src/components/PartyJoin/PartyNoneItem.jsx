import { Box, Typography } from '@mui/material';
import noParty from 'assets/no-party.png';
import { styled } from '@mui/system';

const PartyNoneItem = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <StyledImg src={noParty} alt="no-party" />
      <Typography
        mt={3}
        variant="mediumB"
        align="center"
        color="text.secondary"
        sx={{ wordBreak: 'keep-all' }}
      >
        아직 만들어진 파티가 없습니다.
      </Typography>
      <Typography
        mt={2}
        align="center"
        variant="smallB"
        color="text.disabled"
        sx={{ wordBreak: 'keep-all' }}
      >
        파티장이 되어 모디의 다양한 혜택을 누려보세요.
      </Typography>
    </Box>
  );
};

const StyledImg = styled('img')`
  width: 70%;
  max-width: 300px;
`;

export default PartyNoneItem;
