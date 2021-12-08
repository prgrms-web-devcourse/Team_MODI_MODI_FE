import InfoElement from './InfoElement';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

import { priceToString } from 'utils/priceToString';

const ParseDate = dashedDate => dashedDate.replace(/-/g, '. ');

const PartyInfo = ({
  ottName,
  ottGrade,
  startDate,
  endDate,
  period,
  monthlyFee,
}) => {
  const parsedStartDate = ParseDate(startDate);
  const parsedEndDate = ParseDate(endDate);
  console.log(monthlyFee);
  const parsedTotalPrice = priceToString(period * monthlyFee);
  const parsedMonthlyFee = priceToString(monthlyFee);

  return (
    <Box pt={2} pb={1} sx={{ borderBottom: '2px dashed #eeeeee' }}>
      <InfoElement name="서비스" info={`${ottName} ${ottGrade}`} />
      <InfoElement
        name="기간"
        info={`${parsedStartDate} ~ ${parsedEndDate} (${period}개월)`}
      />
      <InfoElement
        name="서비스 이용료 (월)"
        info={`${parsedTotalPrice} (${parsedMonthlyFee})P`}
      />
    </Box>
  );
};

PartyInfo.propTypes = {
  ottName: PropTypes.oneOf(['넷플릭스', '왓챠', '디즈니 플러스', '웨이브']),
  ottGrade: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  period: PropTypes.number,
  monthlyFee: PropTypes.number,
};

export default PartyInfo;
