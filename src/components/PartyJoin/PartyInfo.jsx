import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@mui/material';
import InfoElement from 'components/Common/InfoElement';
import { priceToString } from 'utils/priceToString';
import { parseDate } from 'utils/parseDate';

const PartyInfo = ({
  ottName,
  ottGrade,
  startDate,
  endDate,
  period,
  monthlyFee,
  isTitle,
}) => {
  const parsedStartDate = useMemo(() => parseDate(startDate), [startDate]);
  const parsedEndDate = useMemo(() => parseDate(endDate), [endDate]);
  const parsedTotalPrice = useMemo(
    () => priceToString(period * monthlyFee),
    [period, monthlyFee],
  );
  const parsedMonthlyFee = useMemo(
    () => priceToString(monthlyFee),
    [monthlyFee],
  );

  return (
    <>
      <Box
        sx={{
          p: '8px 0 24px',
          borderBottom: '1px dashed #eeeeee',
        }}
      >
        {isTitle && (
          <Typography
            variant="baseB"
            component="h3"
            sx={{
              mb: 1,
            }}
          >
            파티정보
          </Typography>
        )}

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
    </>
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
  isTitle: PropTypes.bool,
};

export default PartyInfo;
