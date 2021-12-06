import { AirlineSeatReclineExtra, MonetizationOn } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const PriceContainer = styled.p`
  font-size: 14px;
  margin-top: -3px;
`;

const LineThroungh = styled.span`
  text-decoration: line-through;
  color: #bbbbbb;
`;

const Bold = styled.span`
  font-weight: 700;
`;

const priceToString = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const PartySummary = ({
  partyId,
  grade,
  price,
  maxMemberCapacity,
  currentMemberCapacity,
  startDate,
  startsIn,
  endDate,
  period,
  mustFilled,
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 351,
        height: 129,
        borderRadius: '16px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
            style={{
              paddingTop: 10,
              paddingLeft: 10,
            }}
          >
            <Box>
              <Typography variant="large" color="primary">
                {startsIn}
              </Typography>
              <Typography variant="mediumB">일 후 파티 시작</Typography>
            </Box>

            <Typography variant="small" color="text.secondary">
              ~{endDate} 까지 ({period}개월)
            </Typography>
            <Box
              sx={{
                p: 0.5,
              }}
            >
              {[1, 2, 3, 4].map(member => (
                <AirlineSeatReclineExtra
                  key={member}
                  color={
                    member <= currentMemberCapacity ? 'secondary' : 'modiGray'
                  }
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              flexGrow: 1,
              p: 1,
              m: 1,
            }}
          >
            <Typography variant="small">{grade}</Typography>
            <PriceContainer>
              <MonetizationOn
                sx={{
                  width: 18,
                  fontSize: 13,
                }}
                color="primary"
              />
              월 <LineThroungh>{priceToString(price * 4)}원</LineThroungh>{' '}
              <Bold>{priceToString(price)}</Bold>원
            </PriceContainer>
          </Box>
        </Box>
        <Typography
          variant="micro"
          color="text.secondary"
          sx={{
            paddingLeft: 1,
          }}
        >
          {mustFilled
            ? '파티시작일에 무조건 파티가 시작됩니다.'
            : '파티 시작일까지 모집인원이 충족되지 못하면 파티가 취소됩니다.'}
        </Typography>
      </Box>
    </Paper>
  );
};

PartySummary.propTypes = {
  partyId: PropTypes.number,
  grade: PropTypes.string,
  price: PropTypes.number,
  maxMemberCapacity: PropTypes.number,
  currentMemberCapacity: PropTypes.number,
  startDate: PropTypes.string,
  startsIn: PropTypes.number,
  endDate: PropTypes.string,
  period: PropTypes.number,
  mustFilled: PropTypes.bool,
};

export default PartySummary;
