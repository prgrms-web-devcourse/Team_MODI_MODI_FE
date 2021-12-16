import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import InfoElement from 'components/Common/InfoElement';
import { priceToString } from 'utils/priceToString';
import { ParseDate } from 'utils/ParseDate';

const PartyInfo = ({
  ottName,
  ottGrade,
  startDate,
  endDate,
  period,
  monthlyFee,
}) => {
  const parsedStartDate = useMemo(() => ParseDate(startDate), [startDate]);
  const parsedEndDate = useMemo(() => ParseDate(endDate), [endDate]);
  const parsedTotalPrice = useMemo(
    () => priceToString(period * monthlyFee),
    [period, monthlyFee],
  );
  const parsedMonthlyFee = useMemo(
    () => priceToString(monthlyFee),
    [monthlyFee],
  );

  return (
    <Box pt={2} pb={1} sx={{ borderBottom: '2px dashed #eeeeee' }}>
      <InfoElement
        left={{ contentL: '서비스' }}
        right={{ contentR: `${ottName} ${ottGrade}` }}
      />
      <InfoElement
        left={{ contentL: '기간' }}
        right={{
          contentR: `${parsedStartDate} ~ ${parsedEndDate} (${period}개월)`,
        }}
      />
      <InfoElement
        left={{ contentL: '서비스 이용료 (월)' }}
        right={{
          contentR: `${parsedTotalPrice} (${parsedMonthlyFee})P`,
        }}
      />
    </Box>
  );
};

PartyInfo.propTypes = {
  ottName: PropTypes.oneOf([
    '넷플릭스',
    '왓챠',
    '웨이브',
    '티빙',
    '디즈니 플러스',
    '라프텔',
    '쿠팡 플레이',
    '아마존 프라임',
    '',
  ]),
  ottGrade: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  period: PropTypes.number,
  monthlyFee: PropTypes.number,
};

export default PartyInfo;
