import PropTypes from 'prop-types';
import CardFlip from './CardFlip';
import { Card, CardContent, Box, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import { styled } from '@mui/system';

const PartyShareAccount = ({
  fliped,
  onFlipCard,
  sharedId,
  sharedPassword,
}) => {
  const front = (
    <StyledCard raised>
      <StyledCardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '36px',
            borderRadius: '18px',
            mb: 2,
            border: theme => `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <MailIcon
            sx={{
              m: '0 20px',
              color: theme => theme.palette.primary.main,
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '36px',
            borderRadius: '18px',
            border: theme => `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <KeyIcon
            sx={{
              m: '0 20px',
              color: theme => theme.palette.primary.main,
            }}
          />
        </Box>
      </StyledCardContent>
    </StyledCard>
  );
  const back = (
    <StyledCard raised>
      <StyledCardContent sx={{ minWidth: '280px' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '36px',
            borderRadius: '18px',
            mb: 2,
            border: theme => `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <MailIcon
            sx={{
              m: '0 20px',
              color: theme => theme.palette.primary.main,
            }}
          />
          <Typography variant="microB">{sharedId}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '36px',
            borderRadius: '18px',
            border: theme => `2px solid ${theme.palette.primary.main}`,
          }}
        >
          <KeyIcon
            sx={{
              m: '0 20px',
              color: theme => theme.palette.primary.main,
            }}
          />
          <Typography variant="microB">{sharedPassword}</Typography>
        </Box>
      </StyledCardContent>
    </StyledCard>
  );

  return (
    <CardFlip
      fliped={fliped}
      onFlipCard={onFlipCard}
      front={front}
      back={back}
    />
  );
};

const StyledCard = styled(Card)`
  width: 350;
  height: 150;
  border-radius: 24px;
  padding: 10px;
`;

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.modiGray.light,
  borderRadius: '20px',
  padding: '20px 26px 20px 26px',
}));

PartyShareAccount.propTypes = {
  fliped: PropTypes.bool,
  onFlipCard: PropTypes.func,
  sharedId: PropTypes.string,
  sharedPassword: PropTypes.string,
};

export default PartyShareAccount;
