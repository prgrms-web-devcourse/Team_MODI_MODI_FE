import { PropTypes } from 'prop-types';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
const CreatePartyTitle = ({
  subTitle,
  sx = {
    paddingTop: '70px',
    marginBottom: 8,
  },
}) => {
  return (
    <Box sx={sx}>
      <Typography variant="mediumB" color="text.secondary">
        우리, 파티를 만들어 볼까요?
      </Typography>
      <TitleTypography variant="large">{subTitle}</TitleTypography>
    </Box>
  );
};

CreatePartyTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  sx: PropTypes.object,
};

export default CreatePartyTitle;

const TitleTypography = styled(Typography)`
  display: block;
`;
