import PropTypes from 'prop-types';
import { Box, Divider, Typography } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import theme from 'styles/theme.js';
import useMediaQuery from '@mui/material/useMediaQuery';
import { priceToString } from 'utils/priceToString';
import crown from 'assets/crown.png';
import OttLogo from 'components/Ott/OttLogo';

const MyPartySummary = ({
  partyId,
  ottId,
  ottName,
  startDate,
  endDate,
  isLeader,
  monthlyReimbursement,
  remainingReimbursement,
  monthlyPrice,
  totalPrice,
  onClickParty,
}) => {
  const handleClickParty = () => {
    onClickParty(partyId);
  };

  const mdDownMatches = useMediaQuery(theme.breakpoints.down('md'));

  const PriceRender = isLeader => {
    if (isLeader) {
      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          <AddCircleOutline
            color="secondary"
            sx={{
              width: 15,
            }}
          />
          <Typography variant="smallB">
            월 {priceToString(monthlyReimbursement)}원
          </Typography>
        </Box>
      );
    } else {
      return (
        <Box
          sx={{
            textAlign: 'right',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography variant="smallB" component="p">
            월 {priceToString(monthlyPrice)}원
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            <RemoveCircleOutline
              sx={{
                width: 15,
              }}
              color="error"
            />
            <Typography variant="smallB">
              총 {priceToString(totalPrice)}원
            </Typography>
          </Box>
        </Box>
      );
    }
  };

  return (
    <Box
      sx={{
        mb: 2,
        cursor: 'pointer',
      }}
      onClick={handleClickParty}
    >
      <Box
        sx={{
          display: 'flex',
          marginBottom: 2,
        }}
      >
        <OttLogo ottName={ottName} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            ml: 2,
          }}
        >
          <Typography
            style={{
              display: 'flex',
              alignItems: 'center',
              whiteSpace: 'nowrap',
            }}
            variant="smallB"
          >
            {ottName}
            {isLeader && (
              <img
                alt="crown"
                src={crown}
                style={{
                  marginLeft: 5,
                  marginBottom: 2.5,
                  width: 20,
                }}
              />
            )}
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
            }}
            variant="small"
            color="text.secondary"
          >
            {startDate}
            <br style={{ display: mdDownMatches ? 'block' : 'none' }} />~
            {endDate}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          {PriceRender(isLeader)}
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

MyPartySummary.propTypes = {
  partyId: PropTypes.number,
  ottId: PropTypes.number,
  ottName: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  isLeader: PropTypes.bool,
  monthlyReimbursement: PropTypes.number,
  remainingReimbursement: PropTypes.number,
  monthlyPrice: PropTypes.number,
  totalPrice: PropTypes.number,
  onClickParty: PropTypes.func,
};

export default MyPartySummary;
