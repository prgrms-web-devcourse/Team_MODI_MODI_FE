import { useParams } from 'react-router';
import PageHeader from 'components/PageHeader';
import { Button } from '@mui/material';
import PageContainer from 'components/PageContainer';
import PageContents from 'components/PageContents';

const RecrutingPartyPage = () => {
  const params = useParams();
  const { ottServiceName } = params;
  /**
   * ott 파티목록 API 요청
   *  const [recruitingPartyListAPIState, fetchRecruitingPartyListAPI] = useAsync(getRecruitingPartyList, [], false)
   *  const [isLoading, data, error] = recruitingPartyListAPIState
   *
   */

  return (
    <>
      <PageContainer>
        <PageHeader ottServiceName={ottServiceName} size={72}>
          <Button type="button" size="small" variant="outlined">
            +파티
          </Button>
        </PageHeader>
      </PageContainer>
      <PageContents />
    </>
  );
};

export default RecrutingPartyPage;
