import { Box } from '@mui/system';
import PropTypes from 'prop-types';

import OttLogo from './OttLogo';
import OttServiceName from './OttServiceName';
import PricePanel from './PricePanel';

const PartyTitle = ({ ottName, ottGrade, monthlyPrice, servicePeriod }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '80px',
      }}
    >
      <OttLogo ottName={ottName} size={72} />
      <OttServiceName ottName={ottName} ottGrade={ottGrade} />
      <PricePanel monthlyPrice={monthlyPrice} servicePeriod={servicePeriod} />
    </Box>
  );
};

export default PartyTitle;

PartyTitle.propTypes = {
  ottName: PropTypes.oneOf(['넷플릭스', '왓챠', '디즈니 플러스', '웨이브'])
    .isRequired,
  ottGrade: PropTypes.string,
  monthlyPrice: PropTypes.number,
  servicePeriod: PropTypes.number,
};
