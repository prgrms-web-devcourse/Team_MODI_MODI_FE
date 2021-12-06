import { CssBaseline } from '@mui/material';
import PartyTitle from 'components/PartyTitle';

const TestPage = () => {
  return (
    <>
      <CssBaseline>
        <PartyTitle ottName="넷플릭스" ottGrade="스탠다드" />
      </CssBaseline>
    </>
  );
};

export default TestPage;
