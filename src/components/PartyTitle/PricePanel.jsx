import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { Typography, Box } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { priceToString } from 'utils/priceToString';

const PricePanel = ({ monthlyPrice, servicePeriod }) => {
  const pricePanelSx = useMemo(
    () => ({
      ml: 'auto',
      textAlign: 'right',
    }),
    [],
  );

  const monthlyPriceToString = useMemo(
    () => priceToString(monthlyPrice),
    [monthlyPrice],
  );

  const totalPriceToString = useMemo(
    () => priceToString(monthlyPrice * servicePeriod),
    [monthlyPrice, servicePeriod],
  );

  return (
    <Box sx={pricePanelSx}>
      <Typography variant="small" color="text.secondary" component="div">
        {`월 ${monthlyPriceToString}P (${servicePeriod}개월)`}
      </Typography>

      <MonetizationOnIcon
        sx={{
          fontSize: 18,
          verticalAlign: 'text-bottom',
        }}
        color="primary"
      />
      <Typography variant="small" component="span">
        총{' '}
      </Typography>
      <Typography variant="mediumB" component="span">
        {totalPriceToString}P
      </Typography>
    </Box>
  );
};

export default PricePanel;

PricePanel.propTypes = {
  monthlyPrice: PropTypes.number,
  servicePeriod: PropTypes.number,
};
