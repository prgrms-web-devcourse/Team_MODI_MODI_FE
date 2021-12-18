import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

import OttLogo from 'components/Ott/OttLogo';
import OttServiceName from './OttServiceName';
import { parseDate } from 'utils/parseDate';

const PartyTitle = ({
  ottName,
  ottGrade,
  startDate,
  endDate,
  period,
  children,
  isLeader,
}) => {
  const hasDateInfo = startDate && endDate && period;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '80px',
      }}
    >
      <OttLogo ottName={ottName} size={72} />
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <OttServiceName
            ottName={ottName}
            ottGrade={ottGrade}
            isLeader={isLeader}
          />
          {children}
        </Box>

        {hasDateInfo && (
          <Typography
            variant="microB"
            color="text.disabled"
            ml="10px"
            mt={1}
            align="right"
            sx={{
              wordBreak: 'keep-all',
            }}
          >
            {`${parseDate(startDate)} ~ ${parseDate(endDate)} (${period}개월)`}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default PartyTitle;

PartyTitle.propTypes = {
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
  ]).isRequired,
  ottGrade: PropTypes.string,
  monthlyPrice: PropTypes.number,
  servicePeriod: PropTypes.number,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  period: PropTypes.number,
  children: PropTypes.node,
  isLeader: PropTypes.bool,
};
