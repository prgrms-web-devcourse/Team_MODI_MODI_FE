import { CssBaseline } from '@mui/material';
import PartyTitle from 'components/PartyTitle/index.jsx';

const TestPage = () => {
  return (
    <>
      <CssBaseline>
        <PartyTitle
          ottName="넷플릭스"
          ottGrade="스탠다드"
          monthlyPrice={400}
          servicePeriod={3}
        />
      </CssBaseline>
    </>
  );
};

export default TestPage;
