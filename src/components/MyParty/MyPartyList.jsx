import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import MyPartySummary from './MyPartySummary';

const MyPartyList = ({
  status,
  parties,
  onClickParty,
  onClickMoreButton,
  buttonDisabled,
}) => {
  const handleClickMoreButton = () => {
    onClickMoreButton(status);
  };

  return (
    <>
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
      <Box
        style={{
          textAlign: 'center',
        }}
      >
        {!buttonDisabled && (
          <Button
            variant="contained"
            size="small"
            color="modiGray"
            onClick={handleClickMoreButton}
          >
            더보기
          </Button>
        )}
      </Box>
    </>
  );
};

MyPartyList.propTypes = {
  status: PropTypes.string,
  parties: PropTypes.array,
  onClickParty: PropTypes.func,
  onClickMoreButton: PropTypes.func,
  buttonDisabled: PropTypes.bool,
};

export default MyPartyList;
