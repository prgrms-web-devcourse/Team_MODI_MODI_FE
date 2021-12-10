import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

const CreatePartyTitle = ({
  subTitle,
  sx = {
    paddingTop: '32px',
    marginBottom: 6,
  },
}) => {
  return (
    <Box sx={sx}>
      <Typography variant="mediumB" component="h2" color="text.secondary">
        우리, 파티를 만들어 볼까요?
      </Typography>
      <TitleTypography variant="large" component="h3">
        {subTitle}
      </TitleTypography>
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
