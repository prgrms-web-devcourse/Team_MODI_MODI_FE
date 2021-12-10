import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';

const CardTemplate = ({ sharedInfo }) => {
  const sharedId = sharedInfo?.sharedId;
  const sharedPassword = sharedInfo?.sharedPassword;

  return (
    <StyledCard raised>
      <StyledCardContent>
        <SharedAccountInfoBox mb={2}>
          <MailIcon
            sx={{
              m: '0 20px',
              color: theme => theme.palette.primary.main,
            }}
          />
          {sharedId && <Typography variant="microB">{sharedId}</Typography>}
        </SharedAccountInfoBox>
        <SharedAccountInfoBox>
          <KeyIcon
            sx={{
              m: '0 20px',
              color: theme => theme.palette.primary.main,
            }}
          />
          {sharedPassword && (
            <Typography variant="microB">{sharedPassword}</Typography>
          )}
        </SharedAccountInfoBox>
      </StyledCardContent>
    </StyledCard>
  );
};

CardTemplate.propTypes = {
  sharedInfo: PropTypes.shape({
    sharedId: PropTypes.string,
    sharedPassword: PropTypes.string,
  }),
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

const SharedAccountInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '36px',
  borderRadius: '18px',
  border: `2px solid ${theme.palette.primary.main}`,
}));

export default CardTemplate;
