import { CssBaseline } from '@mui/material';
import PaymentInfo from 'components/PaymentInfo/index';

const TestPageDorr = () => {
  return (
    <>
      <CssBaseline />
      <PaymentInfo totalPrice={9000} myPoint={1000} />
    </>
  );
};

export default TestPageDorr;